import BasicButton from "../../../common-components/BasicButton";

export default {
    title: "BasicButton",
    component: BasicButton,
}

const Template = (args) => <BasicButton {...args}/>

export const TextButton = {
    args: {
        variant: "text"
    }
}

export const ContainedButton = {
    args: {
        variant: "contained"
    }
}

export const OutlinedButton = {
    args: {
        variant: "outlined"
    }
}