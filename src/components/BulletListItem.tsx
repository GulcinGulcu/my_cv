import { View, Text } from "@react-pdf/renderer";

interface BulletListProps {
  text: string;
}

export function BulletListItem({ text }: BulletListProps) {
  return (
    <View>
      <Text>• {text}</Text>
    </View>
  );
}
