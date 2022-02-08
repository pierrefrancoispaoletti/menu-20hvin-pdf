import styled from "styled-components";

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const NavContainer = styled.nav`
  width: 100%;
  ul {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    li {
      display: inline-block;
      margin-right: 12px;
      border: 1px solid black;
      padding: 1.5em;
      text-align: center;
      border-radius: 80px;
    }
  }
`;

export const ProductsContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;

  h1 {
    text-decoration: underline;
  }
`;

export const ProductContainer = styled.div`
  border: 1px solid black;
  display: flex;
  justify-content: center;
  flex-direction: column;
  justify-content: center;
  width: 80%;
  margin-bottom: 12px;
  p {
    margin: auto;
    font-size: 1.5rem;
    width: 60%;
    text-align: center;
    padding: 8px;
  }
`;

export const ProductTitleContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  margin: auto;

  h2 {
    margin-bottom: 8px;
    text-align: center;
  }
  h3 {
    font-size: 1.5rem;
  }
`;
