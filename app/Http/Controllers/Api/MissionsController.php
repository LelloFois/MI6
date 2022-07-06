<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Mission;

class MissionsController extends Controller
{
    public function store()
    {
        $attributes = request()->validate([
            'name' => 'required|max:255',
            'year' => 'required'
            
        ]);
        
        $result = Mission::create($attributes);

        return $result;
    }
}
