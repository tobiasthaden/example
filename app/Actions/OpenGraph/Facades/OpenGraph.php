<?php

namespace App\Actions\OpenGraph\Facades;

use App\Actions\OpenGraph\Gateway;
use Illuminate\Support\Facades\Facade;

class OpenGraph extends Facade
{
    public static function getFacadeAccessor()
    {
        return Gateway::class;
    }
}
