import styled from 'styled-components'
import { StyleSheet } from 'react-native'

export default StyleSheet.create({
    container: {
        color: "white",
        justifyContent: "center",
        borderStyle: "solid",
        borderWidth: 1,
        borderColor: "rgb(243, 243, 243)",
        marginLeft: 15,
        marginTop: 10,
        marginRight: 15,
        marginBottom: 10,
        flexDirection: "row",
    }
})

export const Container = styled.View`
  display: flex;  
  justify-content: center;
  border: 1px rgb(243, 243, 243) solid;
  margin: 10px 15px 10px 15px;
  flex-direction: row;
`;
export const TransparentInput = styled.TextInput`
    margin: 10px;
    background: transparent;
    width: 80%;
    font-size: 16px;  
`;
