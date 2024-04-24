<?php

use Illuminate\Support\Facades\Broadcast;

Broadcast::channel('chatroom', function () {
    return true;
});
