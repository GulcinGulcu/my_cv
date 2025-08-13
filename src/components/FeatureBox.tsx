import { View, Text } from "@react-pdf/renderer";

interface FeatureBoxProps {
  skill: string;
}

function FeatureBox({ skill }: FeatureBoxProps) {
  return (
    <View
      style={{
        borderRadius: "12",
        padding: "4 6 4 6",
        backgroundColor: '#fbf6ef'
      }}
    >
      <Text>{skill}</Text>
    </View>
  );
}

export default FeatureBox;
