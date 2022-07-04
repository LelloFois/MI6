<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use App\Models\Person;
class Status extends Model
{
    use HasFactory;

    public function status()
{
    return $this->belongsToMany(person::class);
}
}
