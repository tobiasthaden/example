<?php

namespace App\Actions\OpenGraph;

use Illuminate\Support\Collection;
use Symfony\Component\DomCrawler\Crawler;

class Parser
{
    public function __invoke($html)
    {
        $crawler = new Crawler;
        $crawler->addHtmlContent($html, 'UTF-8');

        $properties = [];
        foreach (['name', 'property'] as $t) {
            $metaTags = $crawler->filter("meta[{$t}^='og:']");

            $props = Collection::make($metaTags)->map(function ($tag) use ($t) {
                return new Property(
                    strtolower(trim($tag->getAttribute($t))),
                    trim($tag->getAttribute("content"))
                );
            })->toArray();

            $properties = array_merge($properties, $props);
        }

        return Response::make($properties);
    }
}
