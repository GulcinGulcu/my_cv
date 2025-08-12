import { View, Text, Image, Link } from "@react-pdf/renderer";
import { StyleSheet } from "@react-pdf/renderer";
import LaptopImage from "../../assets/computer.png";

const styles = StyleSheet.create({
  header: {
    padding: "25 20 25 20",
    fontFamily: "Inter",
    fontWeight: "thin",
    backgroundColor: "#a98467",
    color: "#fffcf2",
    display: "flex",
    flexDirection: "row",
  },
  titleSection: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    gap: 4,
  },
  titleSectionRight: {
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-end",
    justifyContent: "flex-end",
    height: "100%",
    gap: 4,
  },
  textName: {
    fontFamily: "Inter",
    fontWeight: "light",
    fontSize: 25,
    letterSpacing: 1,
    marginBottom: "8",
  },
  textTitle: {
    fontWeight: "normal",
    fontSize: 16,
    letterSpacing: 1.5,
    marginBottom: 13,
  },
  textLocation: {
    fontSize: 10,
  },
  textLink: {
    fontSize: 9,
    color: "#fffcf2",
    textDecoration: "none",
  },
  image: {
    width: 30,
    height: 30,
  },
});

function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.titleSection}>
        <Text style={styles.textName}>GULCIN GULCU</Text>
        <Text style={styles.textTitle}>Frontend Developer</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            gap: 20
          }}
        >
          <Link
            src="https://portfolio-eta-lyart-79.vercel.app/"
            style={styles.textLink}
          >
            https://portfolio-eta-lyart-79.vercel.app/
          </Link>
          <View
            style={{
              backgroundColor: "#fffcf2",
              height: 0.5,
              alignSelf: "center",
              flexGrow: 1,
              marginRight: 20,
              opacity: 0.5,
            }}
          ></View>
        </View>
      </View>
      <View style={styles.titleSectionRight}>
        <Image src={LaptopImage} style={styles.image} />
        <Text style={styles.textLocation}>Västerås, Sweden</Text>
        <View>
          <Link src="mailto:gulcin_375@hotmail.com" style={styles.textLink}>
            gulcin_375@hotmail.com
          </Link>
        </View>
        <View>
          <Link src="https://github.com/GulcinGulcu" style={styles.textLink}>
            https://github.com/GulcinGulcu
          </Link>
        </View>
      </View>
    </View>
  );
}

export default Header;
