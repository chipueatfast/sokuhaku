import React from 'react';
import {Text, View} from "react-native";
import style from "../../style";
import CustomCheckbox from "../../../../component/CustomCheckBox";
import { updateCheckboxValue} from "./service";

class StayJapanForm extends React.Component {
    state ={
        formState: {
            checkBoxes: {},
        }
    };
    render() {
        return (
            <React.Fragment>
                <Text style={style.titleBlock}>
                    住宅タイプ
                </Text>
                <View style={style.checkboxArea}>
                    <CustomCheckbox
                        text="まるまる貸し切り"
                        value={0}
                        checked={this.state.formState.checkBoxes['option0']}
                        checkHandler={updateCheckboxValue.bind(this, 0)}
                    />
                    <CustomCheckbox
                        text="個室"
                        value={1}
                        checked={this.state.formState.checkBoxes['option1']}
                        checkHandler={updateCheckboxValue.bind(this, 1)}
                    />
                    <CustomCheckbox
                        text="個室"
                        value={2}
                        checked={this.state.formState.checkBoxes['option2']}
                        checkHandler={updateCheckboxValue.bind(this, 2)}
                    />
                    <CustomCheckbox
                        text="その他"
                        value={3}
                        checked={this.state.formState.checkBoxes['option3']}
                        checkHandler={updateCheckboxValue.bind(this, 3)}
                    />
                </View>
            </React.Fragment>
        )
    }
}

export default StayJapanForm;
