import {COutlinedButton} from "../../../common-components/CButton";

export default {
    title: "COutlinedButton",
    component: COutlinedButton,
}

const Template = (args) => <COutlinedButton {...args}/>

export const Default = {
    args: {
        label: "Button",
    }
}