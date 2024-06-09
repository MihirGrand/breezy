import { StyleSheet, Text, View } from "react-native";
import { Slot, Stack } from "expo-router";
import { useFonts } from "expo-font";

const _layout = () => {
  const [fontsLoaded, error] = useFonts({
    "QuickSand-Light": require("../assets/fonts/Quicksand-Light.ttf"),
    "QuickSand-Regular": require("../assets/fonts/Quicksand-Regular.ttf"),
    "QuickSand-Medium": require("../assets/fonts/Quicksand-Medium.ttf"),
    "QuickSand-SemiBold": require("../assets/fonts/Quicksand-SemiBold.ttf"),
    "QuickSand-Bold": require("../assets/fonts/Quicksand-Bold.ttf"),
  });

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }} />
    </Stack>
  );
};

export default _layout;
