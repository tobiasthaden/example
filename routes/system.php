<?php

use App\Actions\OpenGraph\Http\Controller;
use Illuminate\Support\Facades\Route;

Route::post('open-graph', Controller::class)->name('og.fetch');
