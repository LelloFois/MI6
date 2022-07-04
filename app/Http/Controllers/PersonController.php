<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
   public function index() 
   {
    $people = Person::get();
    return view('people_of_interest.index', compact('people'));
   }
}
