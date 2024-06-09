import { StatusBar } from "expo-status-bar";
import { Text, View, TextInput } from "react-native";
import { Link } from "expo-router";

export default function App() {
  return (
    <View className="flex-1 items-center gap-10 justify-center bg-white">
      <Text className="text-3xl">Breezy</Text>
      <StatusBar style="auto" />
      <TextInput
        className="rounded-lg border-2 w-6/12 px-5 py-2 caret-gray-100 focus:border-rose-600 focus:caret-gray-100"
        selectionColor="#f9fafb"
      ></TextInput>
      <Link href="/profile">profile</Link>
    </View>
  );
}
