<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::middleware('jwt.verify')->get('/user', function (Request $request) {
    return $request->user();
});

Route::group(['middleware' => ['jwt.verify']], function () {
    Route::post('posts', 'PostController@store');
    Route::put('posts/{post}', 'PostController@update');
    Route::delete('posts/{post}', 'PostController@delete');

    Route::post('comments', 'CommentController@store');
});

Route::get('posts', 'PostController@index');
Route::get('posts/{id}', 'PostController@show');

Route::post('/register', 'AuthController@register');
Route::post('/login', 'AuthController@login');
Route::post('/logout', 'AuthController@logout');
