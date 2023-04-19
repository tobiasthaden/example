<?php

namespace App\Pagination;

use Illuminate\Support\Arr;
use Illuminate\Pagination\LengthAwarePaginator as IlluminateLengthAwarePaginator;

class LengthAwarePaginator extends IlluminateLengthAwarePaginator
{
    public function toArray()
    {
        return [
            'data' => $this->items->toArray(),
            'paginator' => [
                'currentPage' => $this->currentPage(),
                'lastPage' => $this->lastPage(),
                'name' => $this->getPageName(),
                'query' => $this->getQueryParams(),
            ],
        ];
    }

    protected function getQueryParams()
    {
        return Arr::except(
            $this->resolveQueryString(),
            $this->getPageName()
        );
    }
}
