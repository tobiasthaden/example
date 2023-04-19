<?php

namespace App\Actions\Flash\Facades;

use App\Actions\Flash\Message as FlashMessage;
use Illuminate\Support\Facades\Facade;

class Message extends Facade
{
    public static function getFacadeAccessor()
    {
        return FlashMessage::class;
    }
}
