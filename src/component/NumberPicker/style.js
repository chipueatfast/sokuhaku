import styled from 'styled-components/native';

export const NumberPickerContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    margin-left: 15px;
`;

export const Number = styled.Text`
    font-size: 18px;
    font-weight: 700;
    padding-right:  10px;
    padding-left: 10px;
`;

export const BorderedButton = styled.View`
    border-radius: 3px;
    border: 2px solid #d2d2d2;
    display: flex;
    justify-content: center;
    height: 26px;
    width: 26px;
    padding-top: 2px;
    align-items: center;
    margin: 2px;
`;

export const Explanation = styled.View`
  justify-content: center;
  flex-direction: column;
  width: 90px;
  margin-right: 13px;

`;

export const Subtitle = styled.Text`
  font-size: 10px;
  color: #858585;
`;

export const Title = styled.Text`
  font-size: 15px;
  color: black;
`;



