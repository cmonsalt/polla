<?php

namespace App\Services;
use App\Models\Estado;

class TicketAvailabilityChecker
{
    public function checkAvailability()
    {
        $estado = Estado::first();
        // return Estado::where('entradas_vendidas', '<', 36)->exists();
        return $estado->entradas_disponibles > 0;
    }
}