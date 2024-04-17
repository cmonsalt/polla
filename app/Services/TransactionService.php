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
        DB::transaction(function () use ($id, $paymentId, $status) {
            $transaction = Transaction::where('id', $id)->first();

            if ($transaction) {
                $transaction->reference = $paymentId;
                $transaction->status = $status;

                if ($status === 'Aprobado') {
                    $email = $transaction->email;
                    $name = $transaction->name;
                    $last_name = $transaction->last_name;
                    $marcador = $this->markerService->getMarker($email, $name, $last_name, $id);
                    $transaction->marcador = $marcador;
                }
                $transaction->save();
            }
        });
    }
}

