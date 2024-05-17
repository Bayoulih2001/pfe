<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('facture_3wms', function (Blueprint $table) {
            $table->id();
            $table->foreignId(\App\Models\Bordereau::class,'bordereau_id');
            $table->string('dossier',255);
            $table->string('structure',255);
            $table->string('direction',255)->nullable();
            $table->date('date_fact');
            $table->string('period_conso',50);
            $table->string('num_fact',50);
            $table->string('devise',50);
            $table->decimal('montant',13,3);
            $table->string('objet');
            $table->string('num_po',50);
            $table->tinyInteger('status',1);
            $table->string('factname',255);
            $table->string('pathpdf',500);
            $table->date('datereception');
            $table->string('created_by',50);
            $table->timestamps('created_at');
            $table->timestamps('updated_at');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('facture_3wms');
    }
};
