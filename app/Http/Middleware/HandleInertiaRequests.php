<?php

namespace App\Http\Middleware;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\App;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Inertia\Middleware;
use Tightenco\Ziggy\Ziggy;

class HandleInertiaRequests extends Middleware
{
    /**
     * The root template that is loaded on the first page visit.
     *
     * @var string
     */
    protected $rootView = 'app';

    /**
     * Determine the current asset version.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return string|null
     */
    public function version(Request $request)
    {
        return parent::version($request);
    }

    /**
     * Define the props that are shared by default.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function share(Request $request)
    {
        return array_merge(parent::share($request), [
            'flash' => function () {
                return Session::get('message');
            },
            'i18n' => function () {
                $locale = App::getLocale();

                if (Storage::disk('i18n')->exists($path = "$locale.json")) {
                    return json_decode(Storage::disk('i18n')->get($path), true);
                }
            },
            'ziggy' => function () use ($request) {
                return array_merge((new Ziggy)->toArray(), [
                    'location' => $request->url(),
                ]);
            },
        ]);
    }
}
