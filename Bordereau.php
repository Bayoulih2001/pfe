<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Bordereau extends Model
{
    use HasFactory;

    protected $fillable = ['user_id','reference','nature','status','folder'
    ,'sent_at','sent_by','created_by','created_at','updated_at'];

}
