import axios from 'axios';

const API_ERRORS = {GET_CURRENCY: 'Error in get cryto currency', GET_CRYPTO_NEWS: 'Error in get crypto news'};

const baseUrlGetCurrency = 'https://alpha-vantage.p.rapidapi.com/query';
const baseUrlGetCryptoNews = 'https://crypto-news-live.p.rapidapi.com/news/coindesk';

const headersGetCurrency = {
    'x-rapidapi-host': 'alpha-vantage.p.rapidapi.com',
    'x-rapidapi-key': 'your-key'
};
const headersGetCrytoNews = {
    'x-rapidapi-host': 'crypto-news-live.p.rapidapi.com',
    'x-rapidapi-key': 'your-key'
}

const paramsGetCurrency = {function: 'CURRENCY_EXCHANGE_RATE', to_currency: 'USD'};
const paramsGetCrytoNews = {};

export const getCryptoCurrency = async (cryptoCurrency) => {
    try {
        paramsGetCurrency['from_currency'] = cryptoCurrency;
        
        const {data} = await axios.get(baseUrlGetCurrency, {
            headers: headersGetCurrency,
            params: paramsGetCurrency
        });
        return data['Realtime Currency Exchange Rate'];
    } catch (error) {
        console.error(error);
        error.errorType = API_ERRORS.GET_CURRENCY;
        throw error;
    }
}

export const getCryptoNews = async (website) => {
    try {
        paramsGetCurrency.websiteId = website;
        const {data} = await axios.get(baseUrlGetCryptoNews, {
            headers: headersGetCrytoNews,
            params: paramsGetCrytoNews
        });

        return data;
    } catch (error) {
        console.error(error);
        error.errorType = API_ERRORS.GET_CRYPTO_NEWS;
        throw error;
    }
}