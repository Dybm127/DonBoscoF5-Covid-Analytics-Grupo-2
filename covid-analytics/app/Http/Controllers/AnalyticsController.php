<?php

namespace App\Http\Controllers;

use App\Models\Regions;
use App\Models\Countries;
use App\Models\Entries;
use Illuminate\Http\Request;

class AnalyticsController extends Controller
{
    public function getTerritories(){
        $countries = Countries::select('countriesAndTerritories')->get();
        return ['countries' => $countries];

        $consulta = Country::select("countriesAndTerritories")->where("geoId", "=", "BF")->get("countryterritoryCode");
        return $consulta;

    }

    public function getRegions(){
        $regions = Regions::all();
        //estamos dando una clave a la variable
        return ['regions' => $regions];
    }

    public function getCountries(){
        $countries = Countries::all();
        return ['countries' => $countries];
    }

    public function getEntries(){
        $entries = Entries::all();
        return ['entries' => $entries];
    }

    public function getSingleRegion($id, $nombre){
        $region = Regions::where('id', '=', $id)
                        ->where('ContinentExp', '=', $nombre)->get();
        return ['region' => $region];
    }

    public function getDatosFecha ($day, $month, $year){
        $entries = Entries::where('day', '=', $day)
                        ->where('month', '=', $month)
                        ->where('year', '=', $year)
                        ->Orderby('country_id')->get();
        return ['entries' => $entries];
    }

    public function getDatosFechaPais ($day, $month, $year, $pais){
        $countries = Countries::where('countriesAndTerritories', '=', $pais)->get();
        $entries = Entries::where('day', '=', $day)
                        ->where('month', '=', $month)
                        ->where('year', '=', $year)
                        ->where('country_id', '=', $countries[0]->id)
                        ->get();
        return ['entries' => $entries];
    }

    public function getSumDatos (){
        $cases = Entries::select('country_id', Entries::raw('SUM(cases) AS cases'))
        ->groupBy('country_id')
        ->get();
        $deaths = Entries::select('country_id', Entries::raw('SUM(deaths) AS deaths'))
        ->groupBy('country_id')
        ->get();
        $acumulativo = Entries::select('country_id', Entries::raw('SUM(Acumulative_number_for_14_days_of_COVID) AS Acumulative_number_for_14_days_of_COVID'))
        ->groupBy('country_id')
        ->get();
        return "Casos: ".$cases." Muertes:".$deaths."Acumulativo: ".$acumulativo;
    }

    public function getSumDatosPais ($pais){
        $countries = Countries::where('countriesAndTerritories', '=', $pais)->get();
        $cases = Entries::select('country_id', Entries::raw('SUM(cases) AS cases'))
        ->where('country_id', '=', $countries[0]->id)
        ->groupBy('country_id')
        ->get();
        $countries = Countries::where('countriesAndTerritories', '=', $pais)->get();
        $deaths = Entries::select('country_id', Entries::raw('SUM(deaths) AS deaths'))
        ->where('country_id', '=', $countries[0]->id)
        ->groupBy('country_id')
        ->get();
        $countries = Countries::where('countriesAndTerritories', '=', $pais)->get();
        $acumulativo = Entries::select('country_id', Entries::raw('SUM(Acumulative_number_for_14_days_of_COVID) AS Acumulative_number_for_14_days_of_COVID'))
        ->where('country_id', '=', $countries[0]->id)
        ->groupBy('country_id')
        ->get();
        return "Casos: ".$cases." Muertes:".$deaths."Acumulativo: ".$acumulativo;
    }
}