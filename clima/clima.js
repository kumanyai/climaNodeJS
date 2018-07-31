const axios = require('axios');

const getClima = async(lat,lng) =>{

    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&units=metric&appid=d74dd4c18d31ec1c59e3b7a05ee7cf22`);
    if(resp.data.status === 400){
        throw new Error(`No hay resultados de clima`);
    }
    let clima = resp.data.main.temp;
    return clima

};

module.exports = {
    getClima
};