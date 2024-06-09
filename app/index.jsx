import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, SafeAreaView, Button } from "react-native";
import { Link, router } from "expo-router";

import images from "../constants/images";

export default function App() {
  return (
    <SafeAreaView className="flex-1 gap-2 bg-bgdark h-full pt-10 items-center">
      <images.Video_Streaming height={300} className="drop-shadow" />
      <Button title="Home" onPress={() => router.push("home")}>
        Home
      </Button>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
