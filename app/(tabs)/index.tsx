import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";
import { sharedStyles } from "@/constants/styles";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { StyleSheet, View } from "react-native";

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
  optionsContainer: {
    flex: 1 / 3,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});

const PlaceholderImage = require("@/assets/images/background-image.png");

export default function Index() {
  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );
  const [showStickerOptions, setShowStickerOptions] = useState(false);

  const pickImageAsync = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      mediaTypes: ["images"],
      quality: 1,
    });

    if (!result.canceled) {
      console.log(result);
      setSelectedImage(result.assets[0].uri);
    } else {
      alert("You did not select any image.");
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={selectedImage ?? PlaceholderImage} />
      </View>
      {!showStickerOptions ? (
        <View style={styles.footerContainer}>
          <Button
            label="Choose a photo"
            onPress={pickImageAsync}
            theme="primary"
          />
          <Button
            label="Use this photo"
            onPress={() => setShowStickerOptions(true)}
          />
        </View>
      ) : (
        <View style={styles.optionsContainer}>
          <IconButton icon="undo" label="Reset" onPress={() => setShowStickerOptions(false)} />
          <CircleButton
            onPress={pickImageAsync}
          />
          <IconButton icon="check" label="Save" onPress={() => setShowStickerOptions(false)} />
        </View>
      )}
    </View>
  );
}
