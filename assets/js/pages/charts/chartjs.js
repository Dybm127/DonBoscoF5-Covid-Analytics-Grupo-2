 import {
    getDatosFecha,
    getDatosFechaPais,
    getSumDatos,
    getSumDatosPais,
   } from '../../API/LlamadaApi.js';

/* $(function () {
    new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line'));
     new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar'));
    new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar'));
    new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie')); 
}); */

function getChartJs(type, datos) {
    let config = null;

    if (type === 'line') {
        let countries = [];
        let casos = [];
        let muertes = [];
        let entries = null;
        
        for(let i = 0; i < 6; i++) {
            entries = datos.entries[i];
            countries.push(entries.country.countriesAndTerritories);
            casos.push(entries.cases);
            muertes.push(entries.deaths);
        }

        config = {
            type: 'line',
            data: {
                labels: countries,
                datasets: [{
                    label: "Casos",
                    data: casos,
                    borderColor: 'rgba(0, 188, 212, 0.75)',
                    backgroundColor: 'rgba(0, 188, 212, 0.3)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.9)',
                    pointBorderWidth: 1
                }, {
                        label: "Muertes",
                        data: muertes,
                        borderColor: 'rgba(233, 30, 99, 0.75)',
                        backgroundColor: 'rgba(233, 30, 99, 0.3)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.9)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
     else if (type === 'bar') {
        let countries = [];
        let casos = [];
        let muertes = [];
        let entries = null;
        
        for(let i = 0; i < 6; i++) {
            entries = datos.entries[i];
            countries.push(entries.country.countriesAndTerritories);
            casos.push(entries.cases);
            muertes.push(entries.deaths);
        }
        config = {
            type: 'bar',
            data: {
                labels: countries,
                datasets: [{
                    label: "Casos",
                    data: casos,
                    backgroundColor: 'rgba(0, 188, 212, 0.8)'
                }, {
                        label: "Muertes",
                        data: muertes,
                        backgroundColor: 'rgba(233, 30, 99, 0.8)'
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'radar') {
        let countries = [];
        let casos = [];
        let muertes = [];
        let entries = null;
        
        for(let i = 0; i < 6; i++) {
            entries = datos.entries[i];
            countries.push(entries.country.countriesAndTerritories);
            casos.push(entries.cases);
            muertes.push(entries.deaths);
        }
        config = {
            type: 'radar',
            data: {
                labels: [],
                datasets: [{
                    label: "Casos",
                    data: casos,
                    borderColor: 'rgba(0, 188, 212, 0.8)',
                    backgroundColor: 'rgba(0, 188, 212, 0.5)',
                    pointBorderColor: 'rgba(0, 188, 212, 0)',
                    pointBackgroundColor: 'rgba(0, 188, 212, 0.8)',
                    pointBorderWidth: 1
                }, {
                        label: "Muertes",
                        data: muertes,
                        borderColor: 'rgba(233, 30, 99, 0.8)',
                        backgroundColor: 'rgba(233, 30, 99, 0.5)',
                        pointBorderColor: 'rgba(233, 30, 99, 0)',
                        pointBackgroundColor: 'rgba(233, 30, 99, 0.8)',
                        pointBorderWidth: 1
                    }]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    else if (type === 'pie') {
        let countries = [];
        let casos = [];
        let muertes = [];
        let entries = null;
        
        for(let i = 0; i < 6; i++) {
            entries = datos.entries[i];
            countries.push(entries.country.countriesAndTerritories);
            casos.push(entries.cases);
            muertes.push(entries.deaths);

        }
        config = {
            type: 'pie',
            data: {
                datasets: [{
                    data: casos,
                    backgroundColor: [
                        "rgb(233, 30, 99)",
                        "rgb(255, 193, 7)",
                        "rgb(0, 188, 212)",
                        "rgb(139, 195, 74)"
                    ],
                }],
                labels: [
                    "Pink",
                    "Amber",
                    "Cyan",
                    "Light Green"
                ]
            },
            options: {
                responsive: true,
                legend: false
            }
        }
    }
    return config;
}

async function getEntriesPorFecha() {

    // let fecha = document.getElementById("fecha").value
    await getDatosFecha('20/09/2020').then(respuesta => {
        new Chart(document.getElementById("line_chart").getContext("2d"), getChartJs('line', respuesta));
    });
}

getEntriesPorFecha();

// async function getEntriesPorFechaPais(fecha, pais) {
//     // let fecha = document.getElementById("fecha", "pais").value
//     await getDatosFechaPais(fecha, pais).then(respuesta => {
//         new Chart(document.getElementById("bar_chart").getContext("2d"), getChartJs('bar', respuesta));
//     });
// }
// getEntriesPorFechaPais('12/09/2020', 'Angola');

async function getEntriesSumDatos() {
    // let fecha = document.getElementById().value
    await getSumDatos().then(respuesta => {
        new Chart(document.getElementById("radar_chart").getContext("2d"), getChartJs('radar', respuesta));
    });
    console.log(respuesta)
}
getEntriesSumDatos();

// async function getEntriesSumDatosPais() {
//     // let fecha = document.getElementById("pais").value
//     let prueba = await getSumDatosPais('Angola').then(respuesta => {
//         console.log(respuesta);
//         new Chart(document.getElementById("pie_chart").getContext("2d"), getChartJs('pie', respuesta));
//     });
// }
// getEntriesSumDatosPais();