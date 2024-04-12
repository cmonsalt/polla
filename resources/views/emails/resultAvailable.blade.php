<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <title>Resultado Disponible</title>
    <!-- Añade la CDN de Bootstrap para usar sus clases -->
    <link href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
    <style>
        body {
            background-color: #f8f9fa; /* Un gris claro, común en los diseños de Bootstrap */
            color: #333; /* Color de texto más oscuro para mejorar la legibilidad */
            font-family: Arial, sans-serif; /* Una tipografía más genérica y profesional */
        }
        .email-container {
            background-color: #ffffff; /* Fondo blanco para el contenido del correo */
            padding: 20px;
            margin: 10px auto; /* Centrado automático */
            border-radius: 8px; /* Bordes redondeados para un look moderno */
            box-shadow: 0 4px 8px rgba(0,0,0,0.1); /* Sombra sutil para el contenedor */
            width: 80%; /* Ajusta al 80% del ancho del contenedor padre */
            max-width: 600px; /* Máximo ancho de 600px */
        }
        .text-success {
            color: #DC143C; /* Azul de Bootstrap para encabezados */
        }
        p {
            font-size: 18px; /* Aumenta el tamaño de la fuente del párrafo */
            line-height: 1.6; /* Espaciado de línea para mejor legibilidad */
        }
    </style>
</head>
<body>
    <div class="email-container">
        <h1 class="text-center text-success">¡Gracias por tu Compra!</h1>
        <p class="lead text-center">Estaras participando con el resultado: <strong>{{ $marcador }}</strong> <hr>
        Recuerda estar pendientes de nuestras redes sociales para enterarte cual 
        sera el partido de futbol que definira el ganador.
    </p>
    </div>
</body>
</html>
