<?php

namespace App\Models;

use App\Models\Countries;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Entries extends Model
{
    use HasFactory;

    public function country(){
        return $this -> belongsTo(Countries::class);
    }
}
