<?php

namespace App\Http\Middleware;

use Closure;

class EnsureIsFromAppFlow
{
    public function handle($request, Closure $next)
    {
        if (!$request->session()->has('allowedToAccessPaymentForm')) {
            // Redirige al usuario a donde consideres adecuado
            return redirect('/');
        }

        return $next($request);
    }
}
