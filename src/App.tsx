import { PDFViewer } from "@react-pdf/renderer";
import "../fonts";
import { Page, View, Document } from "@react-pdf/renderer";
import Header from "./components/header";
import { SecondPage } from "./components/SecondPage";
import Body from "./components/body";

const MyDocument = () => (
  <Document style={{ fontFamily: "Inter" }}>
    <Page size="A4">
      <Header />
      <View style={{ flexGrow: 1 }}>
        <Body />
      </View>
    </Page>
    <Page size="A4">
      <SecondPage />
    </Page>
  </Document>
);

const App = () => (
  <PDFViewer width="100%" height="800">
    <MyDocument />
  </PDFViewer>
);

export default App;
