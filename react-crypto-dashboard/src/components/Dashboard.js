import {
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    List,
    ListIcon,
    ListItem,
    Text
} from '@chakra-ui/react';
import {AiFillStar} from 'react-icons/ai';

import React from 'react';

const Dashboard = ({currencyStatus, news}) => {
    return (
        <Flex flexWrap='wrap' w='100%' justifyContent='between' alignItems='center' mt='10'>
            <Flex justifyContent='center' alignItems='center' w='50%'>
                <StatGroup>
                    <Stat>
                            <StatLabel>Exchange Rate</StatLabel>
                            <StatNumber>{currencyStatus ? currencyStatus['5. Exchange Rate'] : '-'}</StatNumber>
                            <StatLabel>Bid Price</StatLabel>
                            <StatNumber>{currencyStatus ? currencyStatus['8. Bid Price'] : '-'}</StatNumber>
                            <StatLabel>Ask Price</StatLabel>
                            <StatNumber>{currencyStatus ? currencyStatus['9. Ask Price'] : '-'}</StatNumber>
                            <StatHelpText>
                            <StatArrow type={currencyStatus['9. Ask Price'] >= currencyStatus['8. Bid Price'] ? 'increase' : 'decrease'}/>
                                {(currencyStatus['9. Ask Price'] - currencyStatus['8. Bid Price']) / 100} %
                            </StatHelpText>
                    </Stat>
                </StatGroup>
            </Flex>
            <Flex justifyContent='center' alignItems='center' w='50%' maxHeight='300px' overflow='auto'>
                <List>
                    {news.map((siteNew, index) => (
                        <ListItem key={index}>
                            <Flex>
                                <ListIcon mt='1' as={AiFillStar} color='green.500' />
                                <Text fontSize='18px' color='teal.300' fontWeight='bold'>{siteNew.title}</Text>
                            </Flex>
                            <a href={siteNew.url} color='blue'>{siteNew.url}</a>
                        </ListItem>))}
                </List>
            </Flex>
        </Flex>
    )
}

export default Dashboard;