<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use App\Http\Controllers\MercadoPagoController;
use App\Models\Transaction;

class FormController extends Controller
{
    protected $mercadoPagoController;

    public function __construct(MercadoPagoController $mercadoPagoController)
    {
        $this->mercadoPagoController = $mercadoPagoController;
    }
    public function store(Request $request)
    {
        // Define las reglas de validación para cada campo
        $rules = [
            'name' => 'required|string|max:50',
            'last_name' => 'required|string|max:50',
            'phone' => 'required|string|max:10',
            'email' => 'required|email|max:50',
            'paymentMethod' => 'required|in:gateway,coupon', // IMPORTANTE: De aqui activo o desactivo el metodo(s) que requiera
            'coupon' => 'required_if:paymentMethod,coupon|string|max:20',
        ];

        // Define los mensajes de error personalizados
        $messages = [
            'required' => 'El campo :attribute es obligatorio.',
            'email' => 'El campo :attribute debe ser una dirección de correo electrónico válida.',
            'max' => 'El campo :attribute no puede tener más de :max caracteres.',
            'same' => 'El campo :attribute debe coincidir con el campo de confirmación de correo electrónico.',
            'in' => 'El :attribute no es válido.',
            'string' => 'El campo :attribute es obligatorio.',

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
        // Valida los datos del formulario
        $validator = Validator::make($request->all(), $rules, $messages, $attributes);
        // Si la validación falla, retornar los errores
        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()->all()], 422);
        }

        if ($request->input('paymentMethod') === 'gateway') {
            $id = date('YmdHis') . uniqid();
            $name = $request->input('name');
            $last_name = $request->input('last_name');
            $email = $request->input('email');

            $transaction  = new Transaction();
            $transaction ->id = $id;
            $transaction ->event_name = env('EVENT_NAME');
            $transaction ->payment_method = 'gateway';
            $transaction ->name =  strtoupper($request->input('name'));
            $transaction ->last_name = strtoupper($request->input('last_name'));
            $transaction ->phone = $request->input('phone');
            $transaction ->email = $request->input('email');
            $transaction ->status = 'Pendiente';
            $transaction ->save();

            // Lógica para el método de pago gateway
            $preferenceResponse = $this->mercadoPagoController->createPreference($id, $name, $last_name, $email);
            // Devuelve la respuesta de crear la preferencia, que incluye el ID de preferencia
            return $preferenceResponse;
        } else {
            // Lógica para el método de pago coupon u otros casos
            // Por ejemplo, puedes procesar el cupón aquí
            return response()->json(['message' => 'Cupón procesado exitosamente'], 200);
        }


    }
}