<?php

namespace App\Http\Controllers;

use App\Models\Marcador;

class MarcadorController extends Controller
{
    public function index()
    {
        $marcadores = Marcador::where('status', true)->get(['marcador']); // Solo traemos los marcadores disponibles.
        return response()->json($marcadores);
    }
}
