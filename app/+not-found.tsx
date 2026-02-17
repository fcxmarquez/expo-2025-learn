import { Link, Stack } from "expo-router";
import { Text, View, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    color: "#fff",
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default function NotFound() {
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <View style={styles.container}>
        <Text>Not found</Text>
        <Link href="/" style={styles.button}>Go to home screen</Link>
      </View>
    </>
  );
}
