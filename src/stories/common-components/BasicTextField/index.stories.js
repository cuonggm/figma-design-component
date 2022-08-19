import BasicTextField from "../../../common-components/BasicTextField";

export default {
    title: "BasicTextField",
    component: BasicTextField,
}

const Template = (args) => <BasicTextField {...args}/>

export const DefaultTable = {
    args: {
        label: "Outlined Text Field",
        variant: "outlined"
    }
}