<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>GolazoSorteos</title>
        <link rel="icon" type="image/x-icon" href="/images/favicon.ico">
        @viteReactRefresh
        @vite('resources/js/app.js')
        <link href="https://stackpath.bootstrapcdn.com/bootstrap/4.5.2/css/bootstrap.min.css" rel="stylesheet">
        <link rel="stylesheet" type="text/css" href="{{ asset('css/style.css') }}">
        <script src="https://www.google.com/recaptcha/api.js" async defer></script>
        <script src="https://sdk.mercadopago.com/js/v2"></script>


     
    </head>
    <body class="font-sans antialiased dark:bg-black dark:text-white/50">
      <div id="root"></div>
      <script src="https://code.jquery.com/jquery-3.5.1.slim.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.9.2/dist/umd/popper.min.js"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.2/js/bootstrap.min.js"></script>
    </body>
</html>
