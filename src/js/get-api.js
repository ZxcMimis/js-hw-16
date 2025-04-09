import {maps} from './map'
export const getCountry = (country)=>{
    const API = `https://restcountries.com/v3.1/name/${country}`
    return fetch(API).then(data => data.json()).then(data => maps(data))
}