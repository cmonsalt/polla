<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Estado extends Model
{
    protected $table = 'estados';
    protected $fillable = ['id','estado', 'premio', 'entradas_disponibles','entradas_vendidas'];

    
    public $timestamps = false;
    
}
