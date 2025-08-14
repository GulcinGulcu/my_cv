import { View, Text } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";

interface BadgeProps {
  skill: string;
  style?: Style | Style[];
}

export function Badge({ skill, style }: BadgeProps) {
  return (
    <View
      style={[
        {
          borderRadius: "12",
          padding: "4 6 4 6",
          backgroundColor: "#fbf6ef",
        },
        ...(Array.isArray(style) ? style : style ? [style] : []),
      ]}
    >
      <Text style={{ fontSize: 9 }}>{skill}</Text>
    </View>
  );
}
