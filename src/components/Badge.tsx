import { View, Text } from "@react-pdf/renderer";

interface BadgeProps {
  skill: string;
}

export function Badge({ skill }: BadgeProps) {
  return (
    <View
      style={{
        borderRadius: "12",
        padding: "4 6 4 6",
        backgroundColor: "#fbf6ef",
      }}
    >
      <Text>{skill}</Text>
    </View>
  );
}
