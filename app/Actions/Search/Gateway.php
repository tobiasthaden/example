<?php

namespace App\Actions\Search;

interface Gateway
{
    public function index($id): Index;
}
