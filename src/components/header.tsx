import { View, Text } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";

const styles = StyleSheet.create({
  section: {
    padding: '35 20 35 20',
    fontFamily: "Inter",
    fontWeight: "Bold",
    backgroundColor: "#403d39",
  },
  textName: {
    fontFamily: "Inter",
    fontWeight: "Bold",
    color: "#fffcf2",
    fontSize: 24,
    letterSpacing: 1.5,
  },
  textTitle: {
    fontWeight: "normal",
    color: "#fffcf2",
    fontSize: 15,
    letterSpacing: 1.5,
  },
});

function Header() {
  return (
    <View style={styles.section}>
      <Text style={styles.textName}>GULCIN GULCU</Text>
      <Text style={styles.textTitle}>Frontend Developer</Text>
    </View>
  );
}

export default Header;
