import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
import { Image, Text, TextInput, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <SafeAreaView className="flex-1 bg-[#030014] px-4">
      <View className="items-center mb-10 mt-12">
        <Image
          source={require("../../assets/images/logo.png")}
          style={{ width: 120, height: 120 }}
          resizeMode="contain"
          className="mb-4"
        />
        <Text className="text-white text-4xl font-bold tracking-tight">
          YourStop
        </Text>
        <Text className="text-[#A8B5DB] text-base mt-2">
          Never miss your stop again
        </Text>
      </View>

      <View className="flex-row items-center bg-[#221F3D] rounded-2xl px-4 py-3 shadow-lg">
        <Ionicons
          name="search-outline"
          size={20}
          color="#A8B5DB"
          className="mr-3"
        />
        <TextInput
          placeholder="Where are you going?"
          placeholderTextColor="#A8B5DB"
          value={searchQuery}
          onChangeText={setSearchQuery}
          className="flex-1 text-white text-lg ml-2"
        />
      </View>
    </SafeAreaView>
  );
}
