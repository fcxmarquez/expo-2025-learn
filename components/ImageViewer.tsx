import { Image } from "expo-image";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  },
});

type Props = {
  imgSource: string;
};

export default function ImageViewer({ imgSource }: Props) {
  return <Image source={imgSource} style={styles.image} />;
}
