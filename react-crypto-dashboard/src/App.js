import {ChakraProvider, Flex, Heading, Alert} from '@chakra-ui/react';
import {WarningIcon} from '@chakra-ui/icons';
import React, {useState} from 'react';

import theme from './theme';
import './App.css';

import Dashboard from './components/Dashboard';
import Form from './components/Form';
import {getCryptoCurrency, getCryptoNews} from './services/http-service.js';
import {CURRENCY_OPTIONS, WEBSITE_NEWS_OPTIONS, ERROR_MSG} from './util/constants';

const App = () => {
    const [selectedCurrency, setSelectedCurrency] = useState(CURRENCY_OPTIONS[0].value);
    const [selectedWebsiteNews, setSelectedWebsiteNews] = useState(WEBSITE_NEWS_OPTIONS[0].value);
    const [currencyStatus, setCurrencyStatus] = useState({});
    const [news, setNews] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleSelectedCurrency = async () => {
        try {
            setHasError(false);
            setIsLoading(true);
            setCurrencyStatus(await getCryptoCurrency(selectedCurrency));
            setIsLoading(false);
        } catch (error) {
            setHasError(true);
        }
    }

    const handleSelectedWebsiteNews = async () => {
        try {
            setHasError(false);
            setIsLoading(true);
            setNews(await getCryptoNews(selectedWebsiteNews));
            setIsLoading(false);
        } catch (error) {
            setHasError(true);
        }
    }

    return (
        <ChakraProvider theme={theme}>
            <Flex w='100vw' h='100vh' flexDirection='column' className='app'>
                {hasError ? <Alert status='error'><WarningIcon mr='5'/>{ERROR_MSG}</Alert> : ''}
                <Heading mx='auto' my='10'>Crypto Exchange Dashboard</Heading>
                <Dashboard currencyStatus={currencyStatus} news={news} />
                <Form isLoading={isLoading}
                    setSelectedCurrency={setSelectedCurrency} setSelectedWebsiteNews={setSelectedWebsiteNews}
                    handleSelectedCurrency={handleSelectedCurrency} handleSelectedWebsiteNews={handleSelectedWebsiteNews}
                />
            </Flex>
        </ChakraProvider>
    );
}

export default App;
