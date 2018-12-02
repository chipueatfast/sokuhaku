import React from 'react';
import { Text } from 'react-native';
import { Container, Price, NumberContainer, Subtitle } from './style';

function PriceRangeInput(props) {
    const {
        subtitle,
        minPrice,
        maxPrice,
    } = props;
    return (
        <Container>
            <NumberContainer>
                <Price placeholder={minPrice}/>
                <Text style={{textAlign: 'center', width: '10%'}}>-</Text>
                <Price placeholder={maxPrice}/>
            </NumberContainer>
            <Subtitle>
                {subtitle}
            </Subtitle>
        </Container>
    )
}

export default PriceRangeInput

