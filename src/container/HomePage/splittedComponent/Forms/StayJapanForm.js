import React from 'react';
import {Text, View} from "react-native";
import style from "../../style";
import CustomCheckbox from "../../../../component/CustomCheckBox";
import { updateCheckboxValue} from "./service";
import NumberPicker from "../../../../component/NumberPicker";
import PriceRangeInput from "../../../../component/PriceRangeInput";

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
                    ゲスト人数
                </Text>
                <NumberPicker
                    title="大人"
                />
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
                <Text style={style.titleBlock}>
                    一泊
                </Text>
                <PriceRangeInput
                    minPrice="1000"
                    maxPrice="10000"
                    subtitle="平均相場は1泊あたり約¥8,000です"
                />
            </React.Fragment>
        )
    }
}

export default StayJapanForm;
