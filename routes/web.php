<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

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

// Route::get('/', function () {
//     return view('users');
// });

// Route::get('/users', [UserController::class, 'index']);
// Route::get('users/create', [UserController::class], 'create');


Route::get('/{path}', function () {
    return view('users');
})->where('path','.*');