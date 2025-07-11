import { PDFViewer } from "@react-pdf/renderer";
import "../fonts";
import { Page, Text, View, Document, StyleSheet } from "@react-pdf/renderer";
import Header from "./components/header";

const styles = StyleSheet.create({
  page: {
    backgroundColor: "#ffffff",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
});

const MyDocument = () => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Header />
      <View>
        <View style={styles.section}>
          <Text>Section #1</Text>
        </View>
        <View style={styles.section}>
          <Text>Section #2</Text>
        </View>
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
