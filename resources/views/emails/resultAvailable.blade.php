<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado Disponible</title>
    <!-- Añade la CDN de Bootstrap para usar sus clases -->
    <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa; 
            color: #333;
            font-family: Arial, sans-serif; 
        }
        .email-table {
            background-color: #f7f7f7; 
            padding: 20px;
            margin: 0 auto; 
            border-radius: 8px; 
            box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
            width: 100%; 
            max-width: 600px; 
        }
        .text-exit {
            color: #28a745;
            text-align: center;
        }
        .email-content {
            font-size: 15px; 
            line-height: 1.6; 
            text-align: center;
        }
        .marcador-circle {
            width: 40px;
            height: 40px;
            border-radius: 50%;
            background-color: #0275d8;
            color: white;
            line-height: 40px; 
            border: 1px solid #fff;
            margin: 0 auto; 
            text-align: center;
        }
    </style>
</head>
<body>
    <table align="center" border="0" cellpadding="0" cellspacing="0" class="email-table">
        <tr>
            <td>
                <p class="email-content">Hola, <strong>{{ $name }} {{ $last_name }}<strong> </p>
                <h1 class="text-exit">¡Gracias por tu Compra!</h1>
                <p class="email-content">Tu número de pedido es: <strong>{{ $id }}</strong></p>
                <p class="email-content">Estarás participando con el marcador:</p>
                <div class="marcador-circle">{{ $marcador }}</div>
               
            </td>
        </tr>
        <tr>
        <p class="email-content">Recuerda estar pendientes de nuestras redes sociales para enterarte de cuál será el partido de fútbol que definirá el ganador.</p>
        </tr>
    </table>
</body>
</html>
