<?php

namespace App\Http\Controllers\Api;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Models\Person;

class PersonController extends Controller
{
   public function index(Request $request)
   {
       $status = $request->input('status');
       // dd($request->input('status'));
       if (!empty($status)) {
           $people = Person::with('aliases')
               ->with('missions')
               ->where('status_id', '=', $status)
               ->get();
       } else {
           $people = Person::with('aliases')->with('missions')->get();
       }
       return $people;
   }
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


