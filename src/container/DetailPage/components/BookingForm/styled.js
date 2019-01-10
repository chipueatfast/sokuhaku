import styled from 'styled-components';


export const GuestPicker = styled.View`
   display: flex;
  flex-direction: row;
  justify-content: center;
  background-color: white;
`;

export const Container = styled.View`
  margin: 0 15px;
  padding: 15px;
  background-color: white;
`;

export const Selection = styled.View`
  background-color: #009688;
  padding: 4px 8px;
  color: white;
  margin-left: 30px;
  margin-right: 30px;
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

export const HighLight = styled.View`
  height: 2px;
  background-color: #fd666d;
  margin-top: 15px;
  margin-left: 15px;
  margin-right: 15px;
`;

export const Divider = styled.View`
  margin-top: 30px;
  background-color: gray;
  height: 1px;
`;

export const ProcedureForm = styled.View`
  padding: 20px;
  display: flex;
  flex-direction: column;
`;

export const MustRead = styled.Text`
  color: rgb(244, 67, 54);
  font-size: 14px;
`;

