<?php

namespace App\Actions\OpenGraph;

use Illuminate\Contracts\Support\Arrayable;
use stdClass;

class Response implements Arrayable
{
    public $audios = [];

    public $description;

    public $images = [];

    public $siteName;

    public $title;

    public $type;

    public $url;

    public $videos = [];

    public static function make(array $properties)
    {
        $response = new static;

        foreach ($properties as $property) {
            $key = $property->key;
            $value = $property->value;

            switch ($key) {
                case Property::AUDIO:
                case Property::AUDIO_URL:
                    $response->audios[] = tap(new stdClass, fn ($audio) => $audio->url = $value);
                    break;
                case Property::AUDIO_SECURE_URL:
                case Property::AUDIO_TYPE:
                    if (count($response->audios)) {
                        $response->handleAudioAttribute($response->audios[count($response->audios) - 1], $key, $value);
                    }
                    break;
                case Property::DESCRIPTION:
                    if (!$response->description) {
                        $response->description = $value;
                    }
                    break;
                case Property::IMAGE:
                case Property::IMAGE_URL:
                    $response->images[] = tap(new stdClass, fn ($image) => $image->url = $value);
                    break;
                case Property::IMAGE_HEIGHT:
                case Property::IMAGE_SECURE_URL:
                case Property::IMAGE_TYPE:
                case Property::IMAGE_WIDTH:
                    if (count($response->images) > 0) {
                        $response->handleImageAttribute($response->images[count($response->images) - 1], $key, $value);
                    }
                    break;
                case Property::SITE_NAME:
                    if (!$response->siteName) {
                        $response->siteName = $value;
                    }
                    break;
                case Property::TITLE:
                    if (!$response->title) {
                        $response->title = $value;
                    }
                    break;
                case Property::TYPE:
                    if (!$response->type) {
                        $response->type = $value;
                    }
                    break;
                case Property::URL:
                    if (!$response->url) {
                        $response->url = $value;
                    }
                    break;
                case Property::VIDEO:
                case Property::VIDEO_URL:
                    $response->videos[] = tap(new stdClass, fn ($video) => $video->url = $value);
                    break;
                case Property::VIDEO_HEIGHT:
                case Property::VIDEO_SECURE_URL:
                case Property::VIDEO_TYPE:
                case Property::VIDEO_WIDTH:
                    if (count($response->videos) > 0) {
                        $response->handleVideoAttribute($response->videos[count($response->videos) - 1], $key, $value);
                    }
            }
        }

        return $response;
    }

    private function handleImageAttribute($image, $key, $value)
    {
        switch ($key) {
            case Property::IMAGE_HEIGHT:
                $image->height = (int)$value;
                break;
            case Property::IMAGE_WIDTH:
                $image->width = (int)$value;
                break;
            case Property::IMAGE_TYPE:
                $image->type = $value;
                break;
            case Property::IMAGE_SECURE_URL:
                $image->secureUrl = $value;
                break;
        }
    }

    protected function handleVideoAttribute($video, $key, $value)
    {
        switch ($key) {
            case Property::VIDEO_HEIGHT:
                $video->height = (int)$value;
                break;
            case Property::VIDEO_WIDTH:
                $video->width = (int)$value;
                break;
            case Property::VIDEO_TYPE:
                $video->type = $value;
                break;
            case Property::VIDEO_SECURE_URL:
                $video->secureUrl = $value;
                break;
        }
    }

    private function handleAudioAttribute($audio, $key, $value)
    {
        switch ($key) {
            case Property::AUDIO_TYPE:
                $audio->type = $value;
                break;
            case Property::AUDIO_SECURE_URL:
                $audio->secureUrl = $value;
                break;
        }
    }

    public function toArray()
    {
        return get_object_vars($this);
    }
}
