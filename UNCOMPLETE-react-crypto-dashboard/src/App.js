import {
    ChakraProvider,
    Box,
    Flex,
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    List,
    ListIcon,
    ListItem
} from '@chakra-ui/react'
import {
    AiFillStar
} from 'react-icons/ai';
import React from 'react';

import theme from './theme';
import './App.css';


function App() {
    return (
        <ChakraProvider theme={theme}>
            <Flex flexWrap='wrap' w='100vw' p={4}>
                <Box w="75%">
                <StatGroup>
                    <Stat>
                        <StatLabel>Sent</StatLabel>
                        <StatNumber>345,670</StatNumber>
                        <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                        </StatHelpText>
                    </Stat>
                    <Stat>
                        <StatLabel>Clicked</StatLabel>
                        <StatNumber>45</StatNumber>
                        <StatHelpText>
                        <StatArrow type='decrease' />
                        9.05%
                        </StatHelpText>
                    </Stat>
                </StatGroup>
                </Box>
                <Box w="25%">
                <List spacing={3}>
                    <ListItem>
                        <ListIcon as={AiFillStar} color='green.500' />
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={AiFillStar} color='green.500' />
                        Assumenda, quia temporibus eveniet a libero incidunt suscipit
                    </ListItem>
                    <ListItem>
                        <ListIcon as={AiFillStar} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    <ListItem>
                        <ListIcon as={AiFillStar} color='green.500' />
                        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
                    </ListItem>
                    </List>
                </Box>
            </Flex>
        </ChakraProvider>
    );
}

export default App;
