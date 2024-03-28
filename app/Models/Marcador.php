<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Marcador extends Model
{
    use HasFactory;

    // Especificar el nombre de la tabla si no sigue la convención de nombres de Laravel
    protected $table = 'marcadores';

    // Definir los campos que quieres que sean asignables en masa
    protected $fillable = ['id','marcador', 'peso', 'status'];

    // Si no deseas utilizar los timestamps que Laravel incluye por defecto (created_at y updated_at), añade la siguiente línea:
    public $timestamps = false;
    
    // Aquí podrías agregar cualquier relación o método adicional que tu modelo necesite
}
