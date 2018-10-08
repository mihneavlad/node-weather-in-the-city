import WeatherClient from './weatherclient';

const APP_KEY = '66e11fc73f1d842e201e1e5684c01564';

export default async function weather(city) {

    const weather = new WeatherClient(APP_KEY);

    const data = await weather.getEntries(city);

    return data;

}
