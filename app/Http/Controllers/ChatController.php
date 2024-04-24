<?php

namespace App\Http\Controllers;

use App\Events\MessageEvent;
use App\Models\MessageModel;
use Illuminate\Http\Request;

class ChatController extends Controller
{
    public function store(Request $request)
    {
        $message = MessageModel::create($request->all());
        MessageEvent::dispatch($message);
        return response()->json(['success' => true, 'message' => 'Message sent successfully']);
    }

    public function getMessages()
    {
        $messages = MessageModel::all();
        return response()->json(['data' => $messages]);
    }
}
