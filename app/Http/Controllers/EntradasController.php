<?php

// En app/Http/Controllers/EntradasController.php
namespace App\Http\Controllers;

use App\Models\Estado; 
use Illuminate\Http\Response;

class EntradasController extends Controller
{
    public function disponibles()
    {
        $estado = Estado::select('entradas_disponibles')->first();
        
   
        $entradasDisponibles = $estado ? $estado->entradas_disponibles : 0;
        
        return response()->json(['entradasDisponibles' => $entradasDisponibles]);
    }

    public function vendidas() {
        $estado = Estado::select('entradas_vendidas')->first();
        
        $entradasVendidas = $estado ? $estado->entradas_vendidas : 0;
    
        return response()->json(['entradasVendidas' => $entradasVendidas]);
    }
}
