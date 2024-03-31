<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tu Aplicación</title>
    @viteReactRefresh
    @vite('resources/js/app.js')
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css">
    <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">

    <!-- Enlaces a CSS aquí -->
</head>
<body class="success-view">
    @yield('content')

    <!-- Scripts aquí -->
</body>
</html>
