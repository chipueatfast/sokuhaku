import React from 'react';
import {Text, View} from "react-native";
import style from "../../style";
import NumberPicker from "../../../../component/NumberPicker";
import CustomCheckbox from "../../../../component/CustomCheckBox";
import PriceRangeInput from "../../../../component/PriceRangeInput";

import {updateCheckboxValue} from "./service";

class AirBnbForm extends React.Component {
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
                    initialNumber = {1}
                    title="大人"
                />
                <NumberPicker
                    subtitle="年齢2-12"
                    title="子ども"
                />
                <NumberPicker
                    title="乳幼児"
                    subtitle="2歳未満"
                />
                <Text style={style.titleBlock}>
                    住宅タイプ
                </Text>
                <View style={style.checkboxArea}>
                    <CustomCheckbox
                        text="まるまる貸し切り"
                        subtext="まるまる独り占めできる住まい"
                        value={0}
                        checked={this.state.formState.checkBoxes['option0']}
                        checkHandler={updateCheckboxValue.bind(this, 0)}
                    />
                    <CustomCheckbox
                        text="個室"
                        subtext="自分専用の個室＋共用スペース"
                        value={1}
                        checked={this.state.formState.checkBoxes['option1']}
                        checkHandler={updateCheckboxValue.bind(this, 1)}
                    />
                    <CustomCheckbox
                        text="シェアルーム"
                        subtext="相部屋などのシェアルーム"
                        value={2}
                        checked={this.state.formState.checkBoxes['option2']}
                        checkHandler={updateCheckboxValue.bind(this, 2)}
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
                <Text style={style.titleBlock}>
                    こだわり条件
                </Text>
                <NumberPicker
                    title="ベッド"
                />
                <NumberPicker
                    title="寝室"
                />
                <NumberPicker
                    title="バスルーム"
                />
            </React.Fragment>
        )
    }
}

export default AirBnbForm
