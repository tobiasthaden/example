<?php

namespace App\Actions\Flash;

use Illuminate\Support\Facades\Session;

class Message
{
    protected $type = "info";

    public function type($type)
    {
        $this->type = $type;

        return $this;
    }

    public function success($message)
    {
        return $this->type("success")->flash($message);
    }

    public function error($message)
    {
        return $this->type("error")->flash($message);
    }

    public function flash($message)
    {
        return Session::flash("message", [$this->type, $message]);
    }
}
