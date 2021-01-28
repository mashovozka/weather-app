import axios from 'axios';

const baseUrl = 'https://api.openweathermap.org/data/2.5';
const API_KEY = 'b8bf13ed5333b61d48834aebf903865a';

const instance = axios.create({
  baseURL: baseUrl
})

export const weatherApi = {
  getWeatherByCoords(body){
    return instance.get(`/weather?lat=${body.lat}&lon=${body.lng}&units=metric&appid=${API_KEY}`)
  },
  getWeatherByCityName(body){
    return instance.get(`/weather?q=${body}&units=metric&appid=${API_KEY}`)
  }
};