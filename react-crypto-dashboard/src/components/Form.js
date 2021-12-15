import {Flex, Select, Button} from '@chakra-ui/react';
import React from 'react';

import {CURRENCY_OPTIONS, WEBSITE_NEWS_OPTIONS} from '../util/constants';

const Form = ({isLoading, handleSelectedCurrency, handleSelectedWebsiteNews, setSelectedCurrency, setSelectedWebsiteNews}) => {

    const setSelectedCurrencyHandler = (event) => setSelectedCurrency(event.target.value)
    const setSelectedWebsiteNewsHandler = (event) => setSelectedWebsiteNews(event.taget.value);

    return (
        <Flex flexWrap='wrap' w='100vw' justifyContent='center' alignItems='center' mt='10'>
            <Flex flexDirection='column' w='50%' justifyContent='center' alignItems='center'>
                <Select  w='200px' my='10' onChange={setSelectedCurrencyHandler}>
                    {CURRENCY_OPTIONS.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
                </Select>
                <Button isLoading={isLoading} colorScheme='teal' variant='solid' onClick={handleSelectedCurrency}>Choose currency</Button>
            </Flex>
            <Flex flexDirection='column' w='50%' justifyContent='center' alignItems='center'>
                <Select w='200px' my='10'  onChange={setSelectedWebsiteNewsHandler}>
                    {WEBSITE_NEWS_OPTIONS.map(option => (<option key={option.value} value={option.value}>{option.label}</option>))}
                </Select>
                <Button isLoading={isLoading} colorScheme='teal' variant='solid' onClick={handleSelectedWebsiteNews}>Choose website</Button>
            </Flex>
        </Flex>
    )
}

export default Form;