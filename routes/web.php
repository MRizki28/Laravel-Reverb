<?php

use App\Http\Controllers\ChatController;
use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

Route::get('/', function () {
    return view('chat');
});

Route::get('/chat/get-message', [ChatController::class, 'getMessages'])->name('chat.get');
Route::post('/chat/send-message', [ChatController::class, 'store'])->name('chat.send');
