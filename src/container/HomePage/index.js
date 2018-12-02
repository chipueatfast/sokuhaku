import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import Collapsible from 'react-native-collapsible';
import CustomMapView from '../../component/CustomMapView';
import CustomCheckbox from '../../component/CustomCheckBox';
import NumberPicker from '../../component/NumberPicker';
import Logo from '../../component/Logo';
import ToggleButton from '../../component/ToggleButton';
import style from './style';
import LandmarkCard from './splittedComponent/LandmarkCard';


class HomePage extends React.Component {
    state = {
        querying: 'airBnb',
        isFormCollapsed: false,
        formState: {
            checkBoxes: {},
        }
    };

    resetForm = () => {
        this.setState({
            formState: {
                checkBoxes: {},
            }
        })
    };

    updateCheckboxValue = (value) => {
        const previousOptionState = this.state.formState.checkBoxes;
        const currentOptionState = this.state.formState.checkBoxes[`option${value}`];
        this.setState({
            formState: {
                checkBoxes: {...previousOptionState, [`option${value}`]: !currentOptionState},
            }
        });
        console.log(this.state);
    };
    toggleHandler = (value) => {
        this.resetForm();
        this.setState({
            querying: value ? 'stayJapan' : 'airBnb',
        })
    };
    render() {
        const { isFormCollapsed } = this.state;
        const { querying } = this.state;
        return (
            <ScrollView style={style.container}>
                <View style={style.heroBanner}>
                    <View style={style.midContent}>
                        <Text style={style.subTitle}>
                            今すぐここで泊まれる民泊を探せる
                        </Text>
                        <View style={style.logoContainer}>
                            <Logo
                                style={{
                                    color: 'white',
                                }}
                                width={206}
                                height={36}
                            />
                        </View>
                        <Text style={style.subTitle}>
                            ソクハク
                        </Text>
                    </View>
                </View>
                <ToggleButton
                    pressHandler={() => {
                        this.setState({
                            isFormCollapsed: !isFormCollapsed,
                        })
                    }}
                    inactiveColor = {{
                        color: 'black',
                        backgroundColor: "rgb(246, 246, 246)",
                    }}
                    text={isFormCollapsed ? '検索メニューを開く    ↑' : '検索メニューを閉じる    ↓'}
                />
                <Collapsible collapsed={this.state.isFormCollapsed}>
                    <View style={style.formQuery}>
                        <View style={style.toggleCategory}>
                            <ToggleButton
                                style={{
                                    flex: 1,
                                    margin: 10,
                                }}
                                text="AirBnB"
                                activeColor= {{
                                    backgroundColor: "#ec4951",
                                    color: "white",
                                }}
                                pressHandler={this.toggleHandler.bind(this, 0)}
                                isActive={querying === 'airBnb'}
                            />
                            <ToggleButton
                                style={{
                                    flex: 1,
                                    margin: 10,
                                }}
                                text="StayJapan"
                                activeColor= {{
                                    backgroundColor: "#ec4953",
                                    color: "white",
                                }}
                                pressHandler={this.toggleHandler.bind(this, 1)}
                                isActive={querying === 'stayJapan'}
                            />
                        </View>
                        <View style={style.criteria}>
                            {
                                querying === "airBnb" ? (
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
                                                checkHandler={this.updateCheckboxValue.bind(this, 0)}
                                            />
                                            <CustomCheckbox
                                                text="個室"
                                                subtext="自分専用の個室＋共用スペース"
                                                value={1}
                                                checked={this.state.formState.checkBoxes['option1']}
                                                checkHandler={this.updateCheckboxValue.bind(this, 1)}
                                            />
                                            <CustomCheckbox
                                                text="シェアルーム"
                                                subtext="相部屋などのシェアルーム"
                                                value={2}
                                                checked={this.state.formState.checkBoxes['option2']}
                                                checkHandler={this.updateCheckboxValue.bind(this, 2)}
                                            />
                                        </View>
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
                                    </React.Fragment>) : (
                                    <React.Fragment>
                                        <Text style={style.titleBlock}>
                                            住宅タイプ
                                        </Text>
                                        <View style={style.checkboxArea}>
                                            <CustomCheckbox
                                                    text="まるまる貸し切り"
                                                    value={0}
                                                    checked={this.state.formState.checkBoxes['option0']}
                                                    checkHandler={this.updateCheckboxValue.bind(this, 0)}
                                            />
                                            <CustomCheckbox
                                                    text="個室"
                                                    value={1}
                                                    checked={this.state.formState.checkBoxes['option1']}
                                                    checkHandler={this.updateCheckboxValue.bind(this, 1)}
                                            />
                                            <CustomCheckbox
                                                    text="個室"
                                                    value={2}
                                                    checked={this.state.formState.checkBoxes['option2']}
                                                    checkHandler={this.updateCheckboxValue.bind(this, 2)}
                                            />
                                            <CustomCheckbox
                                                    text="その他"
                                                    value={3}
                                                    checked={this.state.formState.checkBoxes['option3']}
                                                    checkHandler={this.updateCheckboxValue.bind(this, 3)}
                                            />
                                        </View>
                                    </React.Fragment>
                                    )
                            }
                        </View>
                    </View>
                </Collapsible>
                <CustomMapView />
                <View>
                    <LandmarkCard
                        place="一軒家貸切　Akureyri"
                        detail="A beautiful villa in North Iceland"
                        price="¥47,378 〜　/泊"
                    />
                </View>
            </ScrollView>
        )
    }
}

export default HomePage;
