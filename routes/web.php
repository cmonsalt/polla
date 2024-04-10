<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\MarcadorController;
use App\Http\Controllers\MercadoPagoController;
use App\Http\Middleware\EnsureIsFromAppFlow;
use App\Http\Controllers\EntradasController;
use App\Http\Controllers\EventStatusController;
use App\Http\Controllers\TransactionController;



Route::get('/', function () {
    return view('welcome');
});

Route::post('/form', [FormController::class, 'store']);

Route::get('/csrf-token', function () {
    return response()->json(['token' => csrf_token()]);
})->middleware('web');

Route::get('/success', [MercadoPagoController::class, 'success'])->name('mercadoPago.success');


Route::get('/failure', [MercadoPagoController::class, 'failure'])->name('mercadoPago.failure');


Route::get('/pending', [MercadoPagoController::class, 'pending'])->name('mercadoPago.pending');


Route::get('/api/marcadores', [MarcadorController::class, 'index']);

Route::get('/api/entradas-disponibles', [EntradasController::class, 'disponibles']);
Route::get('/api/entradas-vendidas', [EntradasController::class, 'vendidas']);

Route::get('/api/estado-evento', [EventStatusController::class, 'show']);

Route::get('/api/participantes-aprobados', [TransactionController::class, 'getApprovedParticipants']);









