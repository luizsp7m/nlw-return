import { ArrowLeft } from "phosphor-react-native";
import { View, TextInput, Image, TouchableOpacity, Text } from "react-native";
import { theme } from "../../theme";
import { styles } from "./styles";
import { FeedbackType } from "../Widget";
import { feedbackTypes } from "../../utils/feedbackTypes";
import { ScreenshotButton } from "../ScreenshotButton";
import { Button } from "../Button";
import { captureScreen } from "react-native-view-shot";
import { useState } from "react";
import { api } from "../../libs/api";

import * as FileSystem from "expo-file-system";

interface Props {
  feedbackType: FeedbackType;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackCanceled, onFeedbackSent }: Props) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [comment, setComment] = useState("");

  function handleScreenshot() {
    captureScreen({
      format: "jpg",
      quality: 0.80,
    })
      .then(uri => setScreenshot(uri))
      .catch(error => console.log(error));
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) {
      return;
    }

    setIsSendingFeedback(true);

    const screenshotBase64 = screenshot && await FileSystem.readAsStringAsync(screenshot, {
      encoding: "base64",
    });

    try {
      await api.post("/feedbacks", {
        type: feedbackType,
        screenshot: `data:image/png;base64, ${screenshotBase64}`,
        comment,
      });

      onFeedbackSent();

    } catch (error) {
      console.log(error);

    } finally {
      setIsSendingFeedback(false);
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft
            size={24}
            weight="bold"
            color={theme.colors.text_secondary}
          />
        </TouchableOpacity>

        <View style={styles.title_container}>
          <Image
            source={feedbackTypeInfo.image}
            style={styles.image}
          />

          <Text style={styles.title_text}>
            {feedbackTypeInfo.title}
          </Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder="Algo não está funcionando bem? Queremos corrigir. Conte com detalhes o que está acontecendo..."
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton
          onTakeShot={handleScreenshot}
          onRemoveShot={handleScreenshotRemove}
          screenshot={screenshot}
        />

        <Button
          isLoading={isSendingFeedback}
          onPress={handleSendFeedback}
        />
      </View>
    </View>
  );
}