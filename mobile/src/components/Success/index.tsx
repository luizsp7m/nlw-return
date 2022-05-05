import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

import successImg from "../../assets/success.png";
import { Copyright } from "../Copyright";

interface Props {
  onSentAnotherFeedback: () => void;
}

export function Success({ onSentAnotherFeedback }: Props) {
  return (
    <View style={styles.container}>
      <Image
        source={successImg}
        style={styles.image}
      />

      <Text style={styles.title}>
        Agradecemos o feedback
      </Text>

      <TouchableOpacity style={styles.button} onPress={onSentAnotherFeedback}>
        <Text style={styles.button_title}>Quero enviar outro feedback</Text>
      </TouchableOpacity>

      <Copyright />
    </View>
  );
}