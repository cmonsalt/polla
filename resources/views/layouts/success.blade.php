

@extends('layouts.app')

@section('content')
<div class="container d-flex justify-content-center">
    <div class="w-75">
        <h2 class="text-center mb-4">Detalles de la Transacción</h2>
        <table class="table table-bordered">
            <tbody>
                <tr class="{{ $payment->status == 'approved' ? 'table-success' : '' }}">
                    <th>Estado</th>
                    <td>{{ $payment->status == 'approved' ? 'APROBADO' : 'Otro estado' }}</td>
                </tr>
                
                
                <!-- <tr>
                    <th>Referencia Externa</th>
                    <td>{{ $externalReference }}</td>
                </tr> -->

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
                    <td>PSE</td>
                </tr>
                <tr>
                    <th>Dirección IP del Comprador:</th>
                    <td>{{ Request::ip() }}</td>
                </tr>
                <tr>
                    <th>Monto</th>
                    <td>${{ number_format($payment->transaction_amount, 0, ',', '.') }}</td>
                </tr>
                <!-- Repite el patrón para más datos del pago según necesites -->
            </tbody>
        </table>
    </div>
</div>
@endsection
