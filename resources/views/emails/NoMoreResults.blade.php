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
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        width: 100%;
        max-width: 600px;
    }

    .text-error {
        color: #FF0000;
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
                <h1 class="text-error">¡Ya casi lo tienes!</h1>
                <p class="email-content">Tu número de pedido es: <strong>{{ $id }}</strong></p>
            </td>
        </tr>
        <tr>
            <p class="email-content">Esta vez no alcanzaste un resultado, pero no te preocupes,
                ¡estamos aquí para ayudarte! Pronto te contactaremos con un cupón para que participes
                en el próximo evento sin costo adicional. ¡Gracias por tu entusiasmo y participación!</p>
            </p>
            <p class="email-content">Nos contactaremos a los medios de contacto suministrados por ti, en
                el formulario de registro.
            </p>
            <p class="email-content">Si tienes dudas comunicate a la linea de soporte:
            </p>
        </tr>
    </table>
</body>

</html>