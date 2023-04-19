<?php

namespace App\Actions\Search;

abstract class Index
{
    protected $id;

    public function __construct($id)
    {
        $this->id = $id;
    }

    abstract public function create($args = []);

    abstract public function update($args);

    abstract public function delete();

    abstract public function find($documentId);

    abstract public function add(Searchable ...$documents);

    abstract public function remove($documentId);

    abstract public function search($params);
}
