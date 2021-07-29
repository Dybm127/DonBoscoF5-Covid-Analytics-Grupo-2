<?php

namespace App\Models;

use App\Models\Entries;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Countries extends Model
{
    use HasFactory;

    public function entry(){
        return $this -> hasMany(Entries::class, 'country_id');
    }

    public function regions(){
        return $this -> belongsTo(Regions::class);
    }
}
