import { Image, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  return (
    <SafeAreaView className="flex-1 bg-[#1a1a2e]">
      <View className="items-center mb-8">
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 150, height: 150 }}
          resizeMode="contain"
          className="mb-4"
        />
        <Text className="text-white text-3xl font-bold tracking-wide">
          YourStop
        </Text>
        <Text className="text-[#8888bb] text-sm mt-1">
          Never miss your stop again
        </Text>
      </View>
    </SafeAreaView>
  );
}
