import {CButton} from "../../../common-components/CButton";

export default {
    title: "CButton",
    component: CButton,
}

const Template = (args) => <CButton {...args}/>

export const Default = {
    args: {
        label: "Button",
    }
}