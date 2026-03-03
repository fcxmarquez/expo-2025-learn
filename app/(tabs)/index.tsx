import { sharedStyles } from "@/constants/styles";
import { StyleSheet, View } from "react-native";
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

const styles = StyleSheet.create({
  ...sharedStyles,
  button: {
    color: "#fff",
    marginTop: 20,
    padding: 10,
    backgroundColor: "blue",
    borderRadius: 5,
  },
  imageContainer: {
    flex: 1,
  },
  image: {
    width: 320,
    height: 440,
  },
  footerContainer: {
    flex: 1 / 3,
    alignItems: "center",
  },
});

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label="Choose a photo" theme="primary" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}
