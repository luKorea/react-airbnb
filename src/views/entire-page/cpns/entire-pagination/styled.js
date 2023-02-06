import styled from "styled-components";

export const PaginationWrapper = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  .MuiPaginationItem-page.Mui-selected {
      background-color: #222;
      color: #fff;
  }

  .info {
    margin-top: 18px;
    color: #222;
  }
`