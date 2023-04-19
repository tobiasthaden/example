<?php

namespace App\Cache;

use Illuminate\Support\Facades\Cache as Store;

class Cache
{
    protected $next;

    public function __construct(Cacheable $next)
    {
        $this->next = $next;
    }

    public function __call($method, $parameters)
    {
        $key = md5(json_encode([$method, $parameters]));
        $ttl = $this->next->expiresAt($method);

        return Store::remember($key, $ttl, fn () => $this->next->$method(...$parameters));
    }
}
