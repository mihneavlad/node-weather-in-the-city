import axios from 'axios';

export default class WeatherClient {
    constructor(appKey) {
        this.appKey = appKey;

        this.baseURL = 'http://api.openweathermap.org/data/2.5';
        this.client = axios.create({
            baseURL: this.baseURL,
            params: {
                APPID: this.appKey
            }
        });
    }

    async get(endpoint) {
        const response = await this.client
            .get(endpoint)
            .catch(error =>
                Promise.reject(
                    new Error(`${error.response.status}: ${error.response.statusText}`)
                )
            );

        return response.data;
    }

    async getEntries(city) {
        const response = await this.client.get(
            `/weather?q=${city}&units=metric&APPID=${this.appKey}`
        );

        return `It is now ${response.data.main.temp} degrees Celsius in ${city}, ${
            response.data.sys.country
        } and the current weather condition appears to be ${
            response.data.weather[0].description
        }.`;
    }
}
