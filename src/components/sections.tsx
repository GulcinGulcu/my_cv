import { View } from "@react-pdf/renderer";
import type { Style } from "@react-pdf/types";

interface SectionProps {
  children: React.ReactNode;
}

interface SectionBodyProps {
  children: React.ReactNode;
  style?: Style | Style[];
}

export function SectionHeader({ children }: SectionProps) {
  return (
    <View>
      {children}
      <View
        style={{
          backgroundColor: "#222222",
          height: 1,
          marginTop: 5,
        }}
      ></View>
    </View>
  );
}

export function SectionBody({ children, style }: SectionBodyProps) {
  return (
    <View
      style={[
        {
          fontSize: 10,
        },
        ...(Array.isArray(style) ? style : style ? [style] : []),
      ]}
    >
      {children}
    </View>
  );
}

export function Section({ children }: SectionProps) {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "7",
      }}
    >
      {children}
    </View>
  );
}

export function SectionSubHeader({ children }: SectionProps) {
  return (
    <View
      style={{
        fontSize: 14,
        fontWeight: "semibold",
        display: "flex",
        flexDirection: "row",
        gap: "12",
      }}
    >
      {children}
    </View>
  );
}
