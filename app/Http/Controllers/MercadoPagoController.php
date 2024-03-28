<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use MercadoPago\SDK;
use MercadoPago\Item;
use MercadoPago\Preference;

class MercadoPagoController extends Controller
{
    public function createPreference($id)
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
                array("id" => "credit_card"),
                array("id" => "debit_card")
            ),
            "installments" => 6,
            "default_installments" => 1
        );

        $preference->external_reference = "Teste123";

        // Asegúrate de que estas URLs sean accesibles y manejen la lógica post-pago
        $preference->back_urls = array(
            "success" => url('/success'),
            "failure" => "http://www.google.com/failure",
            "pending" => "http://www.google.com/pending"
        );

        $preference->auto_return = "approved";

        $preference->save();

        return response()->json(['id' => $preference->id]);
    }
}
