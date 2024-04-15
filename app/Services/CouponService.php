<?php

namespace App\Services;

use App\Models\Coupon;

class CouponService
{
    public function validateCoupon($couponCode)
    {
        // Buscar el cupón en la base de datos
        $coupon = Coupon::where('code', $couponCode)->first();

        // Verificar si el cupón existe y si el status es 0 (no utilizado)
        if ($coupon && $coupon->status == 0) {
            $coupon->status = 1;
            $coupon->save();

            // Devolver verdadero o datos adicionales si es necesario
            return true;
        }

        // Si el cupón no existe o ya ha sido utilizado, devolver falso
        return false;
    }
}
