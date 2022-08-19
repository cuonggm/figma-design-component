import styled from "styled-components";
import {TextField} from "@mui/material";


const StyledTextField = styled(TextField)``;

const BasicTextField = (props) => {
    return <StyledTextField label={props.label} variant={props.variant}/>
}

export default BasicTextField