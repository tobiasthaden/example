<?php

namespace App\Actions\Search\Providers\MeiliSearch;

use App\Actions\Search\Gateway as SearchGateway;
use App\Actions\Search\Index;
use App\Actions\Search\Providers\MeiliSearch\Index as MeiliSearchIndex;

class Gateway implements SearchGateway
{
    public function index($id): Index
    {
        return new MeiliSearchIndex($id);
    }
}
