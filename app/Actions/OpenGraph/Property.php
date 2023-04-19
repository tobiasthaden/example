<?php

namespace App\Actions\OpenGraph;

class Property
{
    public const AUDIO = "og:audio";
    public const AUDIO_SECURE_URL = "og:audio:secure_url";
    public const AUDIO_TYPE = "og:audio:type";
    public const AUDIO_URL = "og:audio:url";
    public const DESCRIPTION = "og:description";
    public const IMAGE = "og:image";
    public const IMAGE_HEIGHT = "og:image:height";
    public const IMAGE_SECURE_URL = "og:image:secure_url";
    public const IMAGE_TYPE = "og:image:type";
    public const IMAGE_URL = "og:image:url";
    public const IMAGE_WIDTH = "og:image:width";
    public const SITE_NAME = "og:site_name";
    public const TITLE = "og:title";
    public const TYPE = "og:type";
    public const URL = "og:url";
    public const VIDEO = "og:video";
    public const VIDEO_HEIGHT = "og:video:height";
    public const VIDEO_SECURE_URL = "og:video:secure_url";
    public const VIDEO_TYPE = "og:video:type";
    public const VIDEO_URL = "og:video:url";
    public const VIDEO_WIDTH = "og:video:width";

    public $key;

    public $value;

    public function __construct($key, $value)
    {
        $this->key = $key;
        $this->value = $value;
    }
}
