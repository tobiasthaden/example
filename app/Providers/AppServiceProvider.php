<?php

namespace App\Providers;

use App\Actions\Search;
use App\Pagination\LengthAwarePaginator;
use Illuminate\Support\ServiceProvider;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->bind(\Illuminate\Pagination\LengthAwarePaginator::class, LengthAwarePaginator::class);

        // $this->app->bind(Search\Gateway::class, Search\Providers\MeiliSearch\Gateway::class);
    }

    /**
     * Bootstrap any application services.
     *
     * @return void
     */
    public function boot()
    {
        //
    }
}
