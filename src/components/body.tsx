import { View, Text, StyleSheet } from "@react-pdf/renderer";

function Body() {
  return (
    <View style={styles.main}>
      <View style={styles.sectionLeft}>
        <Text>Section #1</Text>
      </View>
      <View style={styles.sectionRight}>
        <Text>Section #2</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    height: "100%",
    backgroundColor: "#edede9",
  },
  sectionLeft: {
   width: "60%",
   border: "1px solid black",
  },
  sectionRight: {
   width: "40%",
   border: "1px solid black",
  },
});

export default Body;
