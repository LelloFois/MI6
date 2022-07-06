<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Status;
use App\Models\Person;

class StatusController extends Controller
{
    public function index()
    {
        $status = Status::get();
        return $status;
    }

    
}
