<?php

namespace App\Http\Controllers;
use App\Models\Estado; 
use Illuminate\Http\Response;
use Illuminate\Support\Facades\DB;

class EventStatusController extends Controller
{
    public function show()
    {
        $estado = Estado::select('estado')->first();
      return response()->json(['estado' => $estado]);
   
    }
}
