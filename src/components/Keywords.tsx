import { View, Text } from "@react-pdf/renderer";
import keywords from "../../assets/keywords.json";

export function Keywords() {
  const atsKeywords = keywords.join(", ");
  return (
    <View
      style={{
        display: "flex",
        opacity: 0,
        position: "absolute",
        left: "-150%",
        top: "-150%",
      }}
    >
      <Text>{atsKeywords}</Text>
    </View>
  );
}
