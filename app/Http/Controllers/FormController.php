<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\MercadoPagoController;
use App\Models\Transaction;
use GuzzleHttp\Client;
use App\Services\TicketAvailabilityChecker;
use App\Services\CouponService;
use App\Services\TransactionService;

class FormController extends Controller
{
    protected $mercadoPagoController;
    protected $availabilityChecker;

    protected $couponService;

    protected $transactionService;

    public function __construct(MercadoPagoController $mercadoPagoController, TicketAvailabilityChecker $availabilityChecker, CouponService $couponService, TransactionService $transactionService)
    {
        $this->mercadoPagoController = $mercadoPagoController;
        $this->availabilityChecker = $availabilityChecker;
        $this->couponService = $couponService;
        $this->transactionService = $transactionService;
    }
    public function store(Request $request)
    {
        // Define las reglas de validación para cada campo
        $rules = [
            'name' => 'required|string|max:50|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'last_name' => 'required|string|max:50|regex:/^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/',
            'phone' => 'required|string|max:10|regex:/^[0-9]+$/',
            'email' => 'required|email|max:50',
            'paymentMethod' => 'required|in:gateway,coupon', // IMPORTANTE: De aqui activo o desactivo el metodo(s) que requiera
            'coupon' => 'required_if:paymentMethod,coupon|string|max:20',
            'recaptchaToken' => 'required',
        ];

        // Define los mensajes de error personalizados
        $messages = [
            'required' => 'El campo :attribute es obligatorio.',
            'email' => 'El campo :attribute debe ser una dirección de correo electrónico válida.',
            'max' => 'El campo :attribute no puede tener más de :max caracteres.',
            'same' => 'El campo :attribute debe coincidir con el campo de confirmación de correo electrónico.',
            'in' => 'El :attribute no es válido.',
            'string' => 'El campo :attribute es obligatorio.',
            'required_if' => 'El campo :attribute es obligatorio cuando el método de pago es cupón.',
            'name.regex' => 'El nombre solo puede contener letras y espacios.',
            'last_name.regex' => 'El apellido solo puede contener letras y espacios.',
            'phone.regex' => 'El teléfono solo puede contener números.',
        ];
        $attributes = [
            'name' => 'nombre',
            'last_name' => 'apellido',
            'phone' => 'teléfono',
            'email' => 'correo electrónico',
            'confirm_email' => 'confirmación de correo electrónico',
            'paymentMethod' => 'método de pago',
            'coupon' => 'cupón',
        ];

        if (!$this->availabilityChecker->checkAvailability()) {
            return response()->json(['errors' => ['No hay entradas disponibles.']], 422);
        }

        // Valida los datos del formulario
        $validator = Validator::make($request->all(), $rules, $messages, $attributes);
        // Si la validación falla, retornar los errores
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()], 422);
        }

        $recaptchaToken = $request->input('recaptchaToken');
        $client = new Client();
        $response = $client->post('https://www.google.com/recaptcha/api/siteverify', [
            'form_params' => [
                'secret' => env('RECATCHA_SECRET'),
                'response' => $recaptchaToken,
            ],
        ]);

        // $responseData = json_decode($response->getBody(), true);
        // if (!$responseData['success']) {
        //     // El reCAPTCHA no se ha completado correctamente
        //     return response()->json(['errors' => ['Por favor, completa el reCAPTCHA BACK.']], 422);
        // }

        if ($request->input('paymentMethod') === 'gateway') {
            $id = date('YmdHis') . uniqid();
            $name = $request->input('name');
            $last_name = $request->input('last_name');
            $email = $request->input('email');

            $transaction = new Transaction();
            $transaction->id = $id;
            $transaction->event_name = env('EVENT_NAME');
            $transaction->payment_method = 'gateway';
            $transaction->name = strtoupper($request->input('name'));
            $transaction->last_name = strtoupper($request->input('last_name'));
            $transaction->phone = $request->input('phone');
            $transaction->email = $request->input('email');
            $transaction->status = 'Pendiente';
            $transaction->save();

            // Lógica para el método de pago gateway
            $preferenceResponse = $this->mercadoPagoController->createPreference($id, $name, $last_name, $email);
            // Devuelve la respuesta de crear la preferencia, que incluye el ID de preferencia
            return $preferenceResponse;
        } else {
            $couponCode = $request->input('coupon');
            $isValidCoupon = $this->couponService->validateCoupon($couponCode);

            if ($isValidCoupon) {
                // Procesar el cupón válido
                $id = date('YmdHis') . uniqid();
                $name = $request->input('name');
                $last_name = $request->input('last_name');
                $email = $request->input('email');

                $transaction = new Transaction();
                $transaction->id = $id;
                $transaction->event_name = env('EVENT_NAME');
                $transaction->payment_method = 'coupon';
                $transaction->name = strtoupper($request->input('name'));
                $transaction->last_name = strtoupper($request->input('last_name'));
                $transaction->phone = $request->input('phone');
                $transaction->email = $request->input('email');
                $transaction->status = 'Pendiente';
                $transaction->save();

                $externalReference = $id;
                $paymentId = 'coupon';
                $status = "Aprobado";

                $this->transactionService->updateTransactionStatus($externalReference, $paymentId, $status);
                return response()->json(['message' => 'Cupón procesado exitosamente'], 200);
            } else {
                // Manejar el cupón inválido
                return response()->json(['errors' => ['Cupón inválido o ya ha sido utilizado.']], 422);
            }
        }


    }
}