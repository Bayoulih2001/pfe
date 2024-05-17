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
        Schema::create('users', function (Blueprint $table) {
            $table->id();
            $table->string('name');
            $table->string('username');
            $table->string('email')->unique();
            $table->timestamp('username_verified_at')->nullable();
            $table->timestamp('last_login_at');
            $table->string('last_login_ip',50);
            $table->string('password');
            $table->rememberToken();
            $table->string('profil',100);
            $table->integer('direction');
            $table->tinyint('isactive');
            $table->string('image',100);
            $table->string('phone',50);
            $table->string('created_by',100);
            $table->timestamp('created_at');
            $table->timestamp('updated_at');

            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('users');
    }
};
