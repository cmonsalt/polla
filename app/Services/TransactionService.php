<?php
namespace App\Services;

use App\Models\Transaction;
use Illuminate\Support\Facades\DB; // Importa la fachada DB si decides usar transacciones de base de datos.


class TransactionService
{
    protected $markerService;

    // Inyectar MarkerService en el constructor
    public function __construct(MarkerService $markerService)
    {
        $this->markerService = $markerService;
    }

    public function updateTransactionStatus($id, $paymentId, $status)
    {
        // Opcionalmente, puedes envolver la operación en una transacción de base de datos para garantizar la atomicidad.
        DB::transaction(function () use ($id, $paymentId, $status) {
            $transaction = Transaction::where('id', $id)->first();

            if ($transaction) {
                $transaction->reference = $paymentId;
                $transaction->status = $status;

                if ($status === 'Aprobado') {
                    $marcador = $this->markerService->getMarker();
                    $transaction->marcador = $marcador;
                }
                $transaction->save();
            }
        });
    }

    // Suponiendo que esta función devuelve el marcador que necesitas asignar.
    // Implementa la lógica necesaria para obtener este valor.
    
}

