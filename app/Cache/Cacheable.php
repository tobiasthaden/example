<?php

namespace App\Cache;

use RuntimeException;

abstract class Cacheable
{
    public function expiresAt($method)
    {
        throw new RuntimeException('Cacheable does not implement expiresAt method.');
    }
}
