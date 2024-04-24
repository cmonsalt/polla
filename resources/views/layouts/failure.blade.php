@extends('layouts.app')

@section('content')
<div id="react-navbar-container"></div>
<div class="container h-100 d-flex flex-column justify-content-center prize-info-container">
    <div class="row">
        <div class="mx-auto containers">
            <div class="text-center">
                <h1 class="display-4 text-danger">¡Ha ocurrido un error!</h1>
                <p class="leadWarning">Tu pago no ha sido procesado correctamente. Por favor, inténtalo de nuevo más tarde.</p>
            </div>
            <table class="table table-bordered table-bordered-black my-4">
                <tbody>

                    <tr>
                        <th>Referencia de Pago</th>
                        <td>{{ $payment->id }}</td>
                    </tr>
                    <tr>
                        <th>Fecha y Hora:</th>
                        <td>{{ \Carbon\Carbon::parse($payment->date_created)->format('d/m/Y h:i:s A') }}</td>
                    </tr>
                    <tr>
                        <th>Método de Pago:</th>
                        <td>
                            <p>PSE</p>
                        </td>
                    </tr>
                    <tr>
                        <th>Dirección IP del Comprador:</th>
                        <td>{{ Request::ip() }}</td>
                    </tr>
                    <tr>
                        <th>Monto</th>
                        <td>${{ number_format($payment->transaction_amount, 0, ',', '.') }}</td>
                    </tr>
                </tbody>
            </table>
            <div class="text-center">
                <a href="{{ url('/') }}" class="btn btn-primary cta-button">Volver al inicio</a>
            </div>
        </div>
    </div>
</div>
<div id="react-footer-container"></div>
@endsection