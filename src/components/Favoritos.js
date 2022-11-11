import styled from "styled-components";

export const StyledFavorites = styled.div`
  padding: 16px;
  section {
    padding: 16px;
  }
  section h2{
    margin: auto;
  }
  div {
    display: flex;
    padding: 16px;
    gap: 16px;
  }
  div a {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-items: center;
  }
  section a img {
    border-radius: 50%;
  }
  section a span {
    color: ${({theme}) => theme.textColorBase};
    margin-top: 10px;
    width: 88px;
    font-weight: 700;
    font-size: 14px;
    text-align: center;
  }
`;
