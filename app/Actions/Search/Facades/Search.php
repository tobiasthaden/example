<?php

namespace App\Actions\Search\Facades;

use App\Actions\Search\Gateway;
use Illuminate\Support\Facades\Facade;

class Search extends Facade
{
    public static function getFacadeAccessor()
    {
        return Gateway::class;
    }
}
