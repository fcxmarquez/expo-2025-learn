import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "@/constants/styles";

const styles = StyleSheet.create({
  ...sharedStyles,
  button: {
    color: "#fff",
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
});

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Screen</Text>
      <Link href="/about" style={styles.button}>
        Go to About Screen
      </Link>
    </View>
  );
}
