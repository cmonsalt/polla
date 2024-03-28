<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up()
    {
        Schema::create('marcadores', function (Blueprint $table) {
            $table->id();
            $table->string('marcador'); // Ejemplo: "0-0", "1-1", etc.
            $table->enum('peso', ['Alto', 'Medio', 'Bajo']); // Peso del marcador: Alto o Bajo
            $table->boolean('status')->default(true); // True si el marcador está disponible, False si ya ha sido entregado
            $table->timestamps(); // Timestamps de Laravel para created_at y updated_at
        });
    }

    public function down()
    {
        Schema::dropIfExists('marcadores');
    }
};
