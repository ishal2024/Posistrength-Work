import { Stack, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native";

export default function Layout() {
  const router = useRouter();

  return (
    <Stack
      screenOptions={{
        headerTitleAlign: "left",
        headerBackVisible: false,
        headerLeft: () => (
          <TouchableOpacity style = {{"paddingRight" : 12}} onPress={() => router.back()}>
            <Ionicons name="arrow-back" size={24} color="#333" />
          </TouchableOpacity>
        ),
      }}
    />
  );
}
