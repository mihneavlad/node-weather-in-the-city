import axios from 'axios';

export default class weatherClient {
    constructor(appKey) {
        this.appKey = appKey;

        this.baseURL = 'http://api.openweathermap.org/data/2.5/weather?q=';
        this.client = axios.create({
            baseURL: this.baseURL,
            app_key: this.appKey
        });
    }

    async get(endpoint) {

        const response = await this.client.get(endpoint)
            .catch(error => Promise.reject(new Error(`${error.response.status}: ${error.response.statusText}`)));

        return response.data;
    }

    async getEntries(city){
        const data = await this.get(`${city}`);

        return data;
    }
}
