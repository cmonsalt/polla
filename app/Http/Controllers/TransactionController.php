<?php

// En App\Http\Controllers\TransactionController.php

namespace App\Http\Controllers;

use App\Models\Transaction; // Asume que este modelo está correctamente vinculado a tu tabla 'transactions'
use Illuminate\Http\Response;

class TransactionController extends Controller
{
    public function getApprovedParticipants()
    {
        $participantes = Transaction::select('name', 'last_name', 'marcador')
                            ->where('status', 'Aprobado')
                            ->whereNotNull('marcador')
                            ->get()
                            ->map(function ($participante) {
                                $participante->nombre = $participante->name . ' ' . $participante->last_name;
                                return $participante;
                            });

        return response()->json($participantes);
    }
}
