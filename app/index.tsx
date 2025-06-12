import { Link } from "expo-router";
import { Text, View } from "react-native";

export default function Index() {
  return (
    <View
     className="flex items-center justify-center flex-1 bg-slate-700"
    >

      <Text className="text-yellow-500 text-3xl text-center p-3">
        hi, Welcome to Aura its Ai Text to video app
      </Text>
      <Link href="/profile" className="text-white underline">Go to proile</Link>
    </View>
  );
}
