import styled from "styled-components";


export const LeftWrapper = styled.div `
  flex: 1;
  color: ${ props => props.theme.color.primaryColor };
  cursor: pointer;
  .logo {
    margin-left: 24px;
  }
`