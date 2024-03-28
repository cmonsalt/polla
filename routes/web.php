<?php
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\FormController;
use App\Http\Controllers\MarcadorController;
use App\Http\Middleware\EnsureIsFromAppFlow;


Route::get('/', function () {
    return view('welcome');
});

Route::post('/form', [FormController::class, 'store']);

Route::get('/csrf-token', function () {
    return response()->json(['token' => csrf_token()]);
})->middleware('web');
Route::get('/success', function () {
    return view('success');
});

Route::get('/api/marcadores', [MarcadorController::class, 'index']);








