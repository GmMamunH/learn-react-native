import { Link } from "expo-router";
import { Image, Text, View } from "react-native";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Image
        source={{
          uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/512px-React-icon.svg.png",
        }}
        className="w-48 h-48 p-4 mb-4"
      />
      <Text className="text-3xl text-primary font-bold text-justify px-4 bg-secondary rounded-lg">
        Hello Developer. How are you?{" "}
      </Text>

      <Link
        href="/about"
        className="text-2xl p-2 bg-teal-700 rounded-md mt-3 text-white"
      >
        {" "}
        About{" "}
      </Link>
    </View>
  );
}
