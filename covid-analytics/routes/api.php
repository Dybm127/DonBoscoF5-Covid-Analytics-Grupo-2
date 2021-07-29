<?php

use App\Http\Controllers\AnalyticsController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

Route::get('/regions', [AnalyticsController::class, 'getRegions']);
Route::get('/countries', [AnalyticsController::class, 'getCountries']);
Route::get('/entries', [AnalyticsController::class, 'getEntries']);
Route::get('/territories', [AnalyticsController::class, 'getTerritories']);

Route::get('/regions/{idRegion}/{continentExp}/', [AnalyticsController::class, 'getSingleRegion']);
Route::get('/entries/{day}/{month}/{year}', [AnalyticsController::class, 'getDatosFecha']);
Route::get('/entries/{day}/{month}/{year}/{countriesAndTerritories}', [AnalyticsController::class, 'getDatosFechaPais']);
Route::get('/entries', [AnalyticsController::class, 'getSumDatos']);
Route::get('/entries/{countriesAndTerritories}', [AnalyticsController::class, 'getSumDatosPais']);