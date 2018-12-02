export function updateCheckboxValue(value) {
    const previousOptionState = this.state.formState.checkBoxes;
    const currentOptionState = this.state.formState.checkBoxes[`option${value}`];
    this.setState({
        formState: {
            checkBoxes: {...previousOptionState, [`option${value}`]: !currentOptionState},
        }
    });
    console.log(this.state);
}
