<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->string('id')->primary();
            $table->string('event_name', 50); 
            $table->string('payment_method', 20); 
            $table->string('name', 50); // Nombre de la persona
            $table->string('last_name', 50); // Apellido de la persona
            $table->string('phone', 10); // Número de teléfono o celular, máximo 10 dígitos
            $table->string('email', 100); // Dirección de correo electrónico
            $table->enum('status', ['Pendiente', 'Aprobado', 'Rechazado']); // Estado de la transacción
            $table->string('reference')->nullable(); // Referencia de MercadoPago, nullable en caso de que se añada después
            $table->string('marcador')->nullable();
            $table->timestamps(); // Timestamps de Laravel (created_at y updated_at)
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('transactions');
    }
};

