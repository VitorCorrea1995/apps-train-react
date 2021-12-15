import axios from 'axios';

const API_ERRORS = {GET_BTC: 'Error in get BTC', GET_CRYPTO_NEWS: 'Error in get crypto news'};

const baseUrlGetBTC = 'https://alpha-vantage.p.rapidapi.com/query';
const baseUrlGetCryptoNews = '';

const headersGetBTC = {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': 'your-key'
};
const headersGetCrytoNews = {}

const paramsGetBTC = {symbol: 'BTC', function: 'DIGITAL_CURRENCY_DAILY'};
const paramsGetCrytoNews = {};

export const getBTC = async (market) => {
    try {
        paramsGetBTC.market = market;
        
        const {data} = await axios.get(baseUrlGetBTC, {
            headers: headersGetBTC,
            params: paramsGetBTC
        });

        return data['Time Series (Digital Currency Daily)'];
    } catch (error) {
        console.error(error);
        error.errorType = API_ERRORS.GET_BTC;
        throw error;
    }
}

export const getCryptoNews = async (market) => {
    try {
        paramsGetBTC.market = market;
        
        const {data} = await axios.get(baseUrlGetBTC, {
            headers: headersGetBTC,
            params: paramsGetBTC
        });

        return data['Time Series (Digital Currency Daily)'];
    } catch (error) {
        console.error(error);
        error.errorType = API_ERRORS.GET_CRYPTO_NEWS;
        throw error;
    }
}