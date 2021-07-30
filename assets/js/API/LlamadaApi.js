const hostName = 'https://covid-analytics.test';

async function getDatosFecha(fecha){
    return await apiCall('GET',hostName +'/api/entries/' + fecha)
    
}
async function getDatosFechaPais(fecha, pais){
    return await apiCall('GET',hostName +'/api/entries/' + fecha + pais)
    
}
async function getSumDatos(){
    return await apiCall('GET',hostName +'/api/entries/')
    
}
async function getSumDatosPais(pais){
    return await apiCall('GET',hostName +'/api/entries/' + pais)
    
}

const apiCall = async(method, url) =>{
    let config = {
        method: method,
        url: url,
        
    }
    
  const response = await axios(config);

return response.data;

}

export{
    getDatosFecha,
    getDatosFechaPais,
    getSumDatos,
    getSumDatosPais
}