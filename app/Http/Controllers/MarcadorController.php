<?php

namespace App\Http\Controllers;

use App\Models\Marcador;

class MarcadorController extends Controller
{
    public function index()
    {
        $marcadores = Marcador::get(['marcador','status', 'peso']);
        return response()->json($marcadores);
    }
}
