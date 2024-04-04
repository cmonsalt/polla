<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MercadoPago\SDK;
use MercadoPago\Item;
use MercadoPago\Preference;
use MercadoPago\Payment;
use App\Services\TransactionService;

class MercadoPagoController extends Controller
{

    protected $transactionService;

    public function __construct(TransactionService $transactionService)
    {
        $this->transactionService = $transactionService;
    }
    public function createPreference($id, $name, $last_name, $email)
    {
        // Establecer el Access Token
        SDK::setAccessToken(env('MP_ACCESS_TOKEN'));

        // Crear una preferencia de objeto
        $preference = new Preference();
        // Crear un ítem
        $item = new Item();
        $item->id = $id;
        $item->title = "Evento";
        $item->description = "Evento";
        $item->quantity = 1;
        $item->unit_price = "30000";
        $preference->items = array($item);
        $preference->payment_methods = array(
            "excluded_payment_methods" => array(

            ),
            "excluded_payment_types" => array(
                array("id" => "ticket"),
                array("id" => "atm"),
                // array("id" => "credit_card"),
                // array("id" => "debit_card")
            ),
            "installments" => 6,
            "default_installments" => 1
        );
        // $preference->payer = array(
        //     "name" => $name,
        //     "surname" => $last_name,
        //     "email" => $email,
        // );

        $preference->external_reference = $id;

        // Asegúrate de que estas URLs sean accesibles y manejen la lógica post-pago
        $preference->back_urls = array(
            "success" => url('/success'),
            "failure" => url('/failure'),
            "pending" => url('/pending'),
        );

        $preference->auto_return = "approved";

        $preference->save();

        return response()->json(['id' => $preference->id]);
    }
    public function success(Request $request)
    {
        SDK::setAccessToken(env('MP_ACCESS_TOKEN'));

        // El ID del pago es enviado por MercadoPago a la URL de éxito como un parámetro de consulta
        $paymentId = $request->query('payment_id');

        // Consulta el detalle del pago usando la API de MercadoPago
        $payment = Payment::find_by_id($paymentId);

        if ($payment) {
            $externalReference = $payment->external_reference;

            $status = "Aprobado";

            // Aquí llamas a la función de actualización de estado de la transacción.
            $this->transactionService->updateTransactionStatus($externalReference, $paymentId, $status);

            // Procesamiento adicional, como mostrar una vista de éxito.
            return view('layouts.success', ['payment' => $payment, 'externalReference' => $externalReference]);
        }
        return response()->json(['error' => 'Pago no encontrado'], 404);
    }
    public function failure(Request $request)
    {
        SDK::setAccessToken(env('MP_ACCESS_TOKEN'));

        // El ID del pago es enviado por MercadoPago a la URL de éxito como un parámetro de consulta
        $paymentId = $request->query('payment_id');

        // Consulta el detalle del pago usando la API de MercadoPago
        $payment = Payment::find_by_id($paymentId);

        if ($payment) {
            $externalReference = $payment->external_reference;

            $status = "Rechazado";

            // Aquí llamas a la función de actualización de estado de la transacción.
            $this->transactionService->updateTransactionStatus($externalReference, $paymentId, $status);

            // Procesamiento adicional, como mostrar una vista de éxito.
            return view('layouts.failure', ['payment' => $payment, 'externalReference' => $externalReference]);
        }

    }

    public function pending(Request $request)
    {
        SDK::setAccessToken(env('MP_ACCESS_TOKEN'));

        // El ID del pago es enviado por MercadoPago a la URL de éxito como un parámetro de consulta
        $paymentId = $request->query('payment_id');

        // Consulta el detalle del pago usando la API de MercadoPago
        $payment = Payment::find_by_id($paymentId);

       
        if ($payment) {
            $externalReference = $payment->external_reference;

            $status = "Pendiente";

            // Aquí llamas a la función de actualización de estado de la transacción.
            $this->transactionService->updateTransactionStatus($externalReference, $paymentId, $status);

            // Procesamiento adicional, como mostrar una vista de éxito.
            return view('layouts.pending', ['payment' => $payment, 'externalReference' => $externalReference]);
        }
    }

}

