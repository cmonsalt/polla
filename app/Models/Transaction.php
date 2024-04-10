<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Transaction extends Model
{
    use HasFactory;
    protected $table = 'transactions'; // Esto es opcional si sigues la convención de nombres
    protected $fillable = ['id', 'event_name', 'paymentMethod', 'name', 'last_name', 'phone', 'email', 'status', 'reference','marcador'];
    
    public $incrementing = false; // Indica que el ID no es autoincremental
    protected $keyType = 'string'; // Indica que el tipo de dato para el ID es string
}
