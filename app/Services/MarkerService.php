<?php

namespace App\Services;

use App\Models\Marcador; // Asegúrate de que este modelo existe y está correctamente vinculado a tu tabla 'resultados'
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Mail;
use App\Mail\ResultAvailableMail;
use App\Mail\NoMoreResultsMail;

class MarkerService
{
    /**
     * Selecciona y marca un resultado basado en el avance del evento y el peso.
     *
     * @return string|null
     */
    public static function getMarker($email): ?string
    {
        $entradasVendidas = self::calcularEntradasVendidas();

        // Obtiene los puntos de cantidad de entradas vendidas definidos en las variables de entorno
        $puntosAlto = [
            env('ALTO_ENTRADAS_1'),
            env('ALTO_ENTRADAS_2'),
            env('ALTO_ENTRADAS_3'),
            env('ALTO_ENTRADAS_4'),
            env('ALTO_ENTRADAS_5'),
        ];

        // Verifica si la cantidad actual de entradas vendidas coincide con algún punto definido para entregar un "Alto"
        if (in_array($entradasVendidas, $puntosAlto)) {
            $resultado = Marcador::where('peso', 'Alto')->where('status', 1)->inRandomOrder()->first();
        } else {
            // Entrega resultados aleatorios si no estamos en un punto específico para "Alto"
            $resultado = Marcador::where('peso', '!=', 'Alto')->where('status', 1)->inRandomOrder()->first();
        }

        if ($resultado) {
            $resultado->status = 0;
            $resultado->save();

            self::updateTicketCount();

            Mail::to($email)->send(new ResultAvailableMail($resultado->marcador));

            return $resultado->marcador;
        } else {
            self::updateTicketCount();
            Mail::to($email)->send(new NoMoreResultsMail());
            return null;
        }
    }

    protected static function calcularEntradasVendidas(): int
    {
        return DB::table('estados')->value('entradas_vendidas');
    }

    protected static function updateTicketCount(): void
    {
        DB::beginTransaction();
        try {
            // Obtén el estado actual de las entradas
            $estado = DB::table('estados')->first();

            // Asegúrate de que existen entradas disponibles antes de actualizar
            if ($estado && $estado->entradas_disponibles > 0) {
                // Actualiza las entradas disponibles y vendidas
                DB::table('estados')->update([
                    'entradas_disponibles' => DB::raw('entradas_disponibles - 1'),
                    'entradas_vendidas' => DB::raw('entradas_vendidas + 1')
                ]);
                $estado = DB::table('estados')->first();
            }
            if ($estado->entradas_disponibles === 0) {
                DB::table('estados')->update(['estado' => 0]);
            }

            // Confirma la transacción
            DB::commit();
        } catch (\Exception $e) {
            // Revierte la transacción si hay un error
            DB::rollBack();
            // Considera manejar la excepción o rethrowing
            throw $e;
        }
    }

}