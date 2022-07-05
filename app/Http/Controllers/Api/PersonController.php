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

   // public function search(Request $request, $search_string) 
   // {
   //       dd($search_string);
   //       $people = Person::query();
         
   //       if (isset($request['search'])) {
   //          $people = $people->where('name', 'like', '%' . $request['search'].'%');
   //       }
   //       return $people;
   // }

   public function search(Request $request) 
   {
         
         $people = Person::query();
         
         if ($request->input('search') !== null) {
            $people = $people->where('name', 'like', '%' . $request->input('search') .'%');
         }
      $people = $people->with('aliases')->get();  

      return $people;
   }
}
