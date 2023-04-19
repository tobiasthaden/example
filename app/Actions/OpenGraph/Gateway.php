<?php

namespace App\Actions\OpenGraph;

use Illuminate\Support\Facades\Http;
use Symfony\Component\HttpKernel\Exception\HttpException;

class Gateway
{
    public function fetch($url)
    {
        $parser = new Parser;

        try {
            $response = Http::get($url);
        } catch (\Illuminate\Http\Client\ConnectionException $e) {
            throw new HttpException(400, 'Connection failed');
        }

        $response->onError(function () use ($response) {
            throw new HttpException($response->status());
        });

        return $parser($response->body());
    }
}
