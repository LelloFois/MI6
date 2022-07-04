<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
   public function index() 
   {
    $people = Person::with('aliases')->get();
    return $people;
   }

   public function search($request) 
   {
         $people = Person::query();
         
         if (isset($request['search'])) {
            $people = $people->where('name', 'like', '%' . $request['search'].'%');
         }
         return $people;
   }
}
