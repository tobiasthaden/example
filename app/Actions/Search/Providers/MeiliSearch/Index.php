<?php

namespace App\Actions\Search\Providers\MeiliSearch;

use App\Actions\Search\Searchable;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\Http;
use Illuminate\Support\Facades\Config;
use App\Actions\Search\Index as SearchIndex;

class Index extends SearchIndex
{
    public function create($args = [])
    {
        $payload = array_merge($args, ['uid' => $this->id]);

        return $this->auth()->post('/indexes', $payload)->json();
    }

    public function update($args)
    {
        $endpoint = sprintf('/indexes/%s', $this->id);

        return $this->auth()->patch($endpoint, $args)->json();
    }

    public function delete()
    {
        $endpoint = sprintf('/indexes/%s', $this->id);

        return $this->auth()->delete($endpoint)->json();
    }

    public function find($documentId)
    {
        $endpoint = sprintf('/indexes/%s/documents/%s', $this->id, $documentId);

        return $this->auth()->get($endpoint)->json();
    }

    public function add(Searchable ...$documents)
    {
        $endpoint = sprintf('/indexes/%s/documents', $this->id);
        $payload = Collection::make($documents)->map->toSearchableArray()->toArray();

        return $this->auth()->post($endpoint, $payload)->json();
    }

    public function remove($documentId)
    {
        $endpoint = sprintf('/indexes/%s/documents/%s', $this->id, $documentId);

        return $this->auth()->delete($endpoint)->json();
    }

    public function search($params)
    {
        $endpoint = sprintf('/indexes/%s/search', $this->id);

        return $this->auth()->post($endpoint, $params)->json();
    }

    protected function auth()
    {
        $key = Config::get('services.meilisearch.key');
        $host = Config::get('services.meilisearch.host');

        return Http::withToken($key)->baseUrl($host);
    }
}
