<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers;
use App\Http\Controllers\PersonController;
use App\Http\Controllers\Api\MissionsController;
/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('home_index');
});

Route::get('/people_of_interest', [PersonController::class, 'index']);

Route::post('/submit', [MissionsController::class, 'store']);

Route::get('/missions/{path?}', [MissionsController::class, 'app'])->where('path', '.*');
