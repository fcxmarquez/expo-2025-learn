import { MaterialIcons } from "@expo/vector-icons";
import { ComponentProps } from "react";
import { Pressable, StyleSheet, Text } from "react-native";

const styles = StyleSheet.create({
  iconButton: {
    flexDirection: "column",
    gap: 6,
  },
  iconButtonLabel: {
    color: "#fff",
    fontSize: 12,
  },
});

type Props = {
  onPress: () => void;
  icon: ComponentProps<typeof MaterialIcons>["name"];
  label: string;
}

export default function IconButton({ onPress, icon, label }: Props) {
  return (
      <Pressable onPress={onPress} style={styles.iconButton}>
        <MaterialIcons name={icon} size={24} color="#fff" />
        <Text style={styles.iconButtonLabel}>{label}</Text>
      </Pressable>
  );
}
  