<?php

namespace App\Services;

use App\Models\Marcador; // Asegúrate de que este modelo existe y está correctamente vinculado a tu tabla 'resultados'
use Illuminate\Support\Facades\DB;

class MarkerService
{
    /**
     * Selecciona y marca un resultado basado en el avance del evento y el peso.
     *
     * @return string|null
     */
    public static function getMarker(): ?string
    {
        $porcentajeAvance = self::calcularPorcentajeAvance();
        $totalEntregados = Marcador::where('status', 0)->count();

        if ($totalEntregados == 99) {
            $resultado = Marcador::where('peso', 'Alto')->where('status', 1)->first();
        } else {
            $peso = self::determinarPesoPorAvance($porcentajeAvance, $totalEntregados);
            $resultado = Marcador::where('peso', $peso)->where('status', 1)->inRandomOrder()->first();
        }

        if ($resultado) {
            $resultado->status = 0;
            $resultado->save();
            return $resultado->marcador;
        }

        return null;
    }

    protected static function calcularPorcentajeAvance(): float
    {
        $entradasVendidas = DB::table('estados')->value('entradas_vendidas');
        $totalEntradas = 100;
        return ($entradasVendidas / $totalEntradas) * 100;
    }

    protected static function determinarPesoPorAvance(float $porcentajeAvance, int $totalEntregados): string
    {
        // La lógica para determinar el peso se mantiene igual
        if ($porcentajeAvance <= 75) {
            $altosEntregados = Marcador::where('peso', 'Alto')->where('status', 0)->count();
            return $altosEntregados < 3 ? 'Alto' : (rand(0, 1) ? 'Medio' : 'Bajo');
        } else {
            return $totalEntregados < 99 ? (rand(0, 1) ? 'Medio' : 'Bajo') : 'Alto';
        }
    }
}
