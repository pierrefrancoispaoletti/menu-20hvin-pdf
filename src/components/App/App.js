import { PDFViewer } from "@react-pdf/renderer";
import React, { useState } from "react";
import PdfDocucment from "../Document/Document";
import { PDFDownloadLinkStyled } from "./app.style";
const App = () => {
  const [loading, setLoading] = useState(false);
  return (
    <div style={{ height: "100vh" }}>
      <PDFDownloadLinkStyled
        disabled={loading}
        document={<PdfDocucment setLoading={setLoading} />}
        fileName="carte-20hvin.pdf"
      >
        {loading ? "Loading" : "Telecharger"}
      </PDFDownloadLinkStyled>
      <PDFViewer width="100%" height="100%">
        <PdfDocucment setLoading={setLoading} />
      </PDFViewer>
    </div>
  );
};

export default App;
