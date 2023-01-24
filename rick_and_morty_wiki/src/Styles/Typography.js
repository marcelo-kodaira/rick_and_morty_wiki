import styled,{css} from "styled-components"
import { BaseTitle } from "./components/BaseTitle"

export const StyledTitle = styled.BaseTitle`
    font-weight: 700;
    color: ${(props) => props.fontColor};
    font-size: ${(props) => props.fontSize};
`