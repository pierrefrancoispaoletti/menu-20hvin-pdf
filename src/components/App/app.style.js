import { PDFDownloadLink } from "@react-pdf/renderer";
import styled from "styled-components";
import { css } from "styled-components";

const isLoading = (props) => {
  if (props.disabled) {
    return css`
      background-color: grey;
      cursor: default;
    `;
  }
};

export const PDFDownloadLinkStyled = styled(PDFDownloadLink)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 25px auto;
  width: 50%;
  border: 5px solid black;
  background-color: blue;
  color: white;
  text-decoration: none;
  ${isLoading}
`;
