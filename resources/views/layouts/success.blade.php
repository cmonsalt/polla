@extends('layouts.app')

@section('content')
<div class="container h-100 d-flex flex-column justify-content-center">
    <div class="row">
        <div class="col-md-8 col-lg-6 mx-auto">
            <div class="text-center">
                <h1 class="display-4 text-success">¡Gracias por tu compra!</h1>
                <p class="lead">Tu pago se ha procesado correctamente.</p>
            </div>
            <table class="table table-bordered my-4">
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
        <img src="/images/pse.png" alt="Logo PSE" style="height: 50px; width: auto; margin-right: 20px;" />
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
            <a href="/" class="btn btn-primary">Volver al Comercio</a>
            </div>
        </div>
    </div>
</div>
<div id="react-footer-container"></div>
@endsection
