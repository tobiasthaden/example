<?php

namespace App\Actions\OpenGraph\Http;

use App\Actions\OpenGraph\Facades\OpenGraph;
use Illuminate\Http\Request;

class Controller
{
    public function __invoke(Request $request)
    {
        $request->validate([
            'url' => ['required', 'url'],
        ]);

        return OpenGraph::fetch($request->url);
    }
}
