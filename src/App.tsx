import { PDFViewer } from "@react-pdf/renderer";
import "../fonts";
import { Page, View, Document } from "@react-pdf/renderer";
import Header from "./components/header";

import Body from "./components/body";

const MyDocument = () => (
  <Document>
    <Page size="A4">
      <Header />
      <View style={{ flexGrow: 1 }}>
        <Body />
      </View>
    </Page>
  </Document>
);

const App = () => (
  <PDFViewer width="100%" height="800">
    <MyDocument />
  </PDFViewer>
);

export default App;
