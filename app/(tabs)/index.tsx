import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Text className="text-3xl text-primary font-bold text-justify px-4 bg-secondary rounded-lg">
        Hello Developer. How are you?{" "}
      </Text>

      <Link href="/about" className="text-2xl p-2 bg-teal-700 rounded-md mt-3 text-white"> About </Link>
    </View>
  );
}
