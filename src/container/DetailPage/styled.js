import styled from 'styled-components';

export const Content = styled.View`
    background-color: white;
    margin-left: 15px;
    margin-right: 15px;
    padding: 20px;
`;

export const BorderTop = styled.View`
    background-color: #fd666d;
    margin-top: -42px;
    margin-left: 15px;
    margin-right: 15px;
    height: 2px;
`;

export const Summary = styled.View`
  margin-top: 15px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`;

export const SumIndicator = styled.View`
  display: flex;
  flex-direction: row;
  margin-right: 5px;
`;

export const Article = styled.View`
  margin: 15px;
  padding: 15px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 18px;
  padding-bottom: 10px;
`;

export const PageDivider = styled.View`
  height: 24px;
  margin-bottom: 15px;
  background-color: #e2e3e5;
`;

export const Writing = styled.Text`
  font-size: 14px;
`;
