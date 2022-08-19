import {Button, styled} from "@mui/material";
import {boxShadow, boxShadowClick, darkColor, primaryColor} from "../../utils/consts";

const StyledCButton = styled(Button)`
  background-color: ${primaryColor};
  border-radius: 24px;
  box-shadow: ${boxShadow} ${darkColor};
  text-transform: none;

  &:hover {
    background-color: ${primaryColor};
    box-shadow: ${boxShadowClick} ${darkColor};
  }
`;

export const CButton = (props) => {
    return <StyledCButton variant="contained" onClick={props.onClick}>{props.label}</StyledCButton>;
}


const StyledCOutlinedButton = styled(Button)`
  border-radius: 24px;
  box-shadow: ${boxShadow} ${darkColor};
  text-transform: none;
  border: solid 1px ${primaryColor};
  color: ${primaryColor};

  &:hover {
    box-shadow: ${boxShadowClick} ${darkColor};
    color: ${primaryColor};
    border: solid 1px ${primaryColor};
  }
`;

export const COutlinedButton = (props) => {
    return <StyledCOutlinedButton variant="outlined" onClick={props.onClick}>{props.label}</StyledCOutlinedButton>
}