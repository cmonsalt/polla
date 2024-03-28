<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>PollaLatina</title>
        @viteReactRefresh
        @vite('resources/js/app.js')
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
        <script src="https://sdk.mercadopago.com/js/v2"></script>


     
    </head>
    <body class="font-sans antialiased dark:bg-black dark:text-white/50">
      <div id="root"></div>
    </body>
</html>
