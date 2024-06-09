import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput, SafeAreaView, Button } from "react-native";
import { Link, router } from "expo-router";

export default function App() {
  return (
    <SafeAreaView className="bg-bgdark h-full pt-10">
      <Button title="Home" onPress={() => router.push("home")}>
        Home
      </Button>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}
