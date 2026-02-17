import { Link } from "expo-router";
import { StyleSheet, Text, View } from "react-native";
import { sharedStyles } from "@/constants/styles";

const styles = StyleSheet.create({
  ...sharedStyles,
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  }
});

export default function About() {
  return <View style={styles.container}>
    <Text style={styles.text}>About Screen</Text>
    <Link href="/" style={styles.button}>Go to Home Screen</Link>
  </View>;
}