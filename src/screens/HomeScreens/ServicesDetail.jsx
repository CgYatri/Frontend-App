import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function ServicesDetail({ route, navigation }) {
  const key = route?.params?.serviceKey ?? "other";
  return (
    <View className="flex-1 bg-white items-center justify-center px-6">
      <Text className="text-lg font-semibold mb-2">Services</Text>
      <Text className="text-gray-600 mb-4">Detail screen for: {key}</Text>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        className="px-4 py-2 bg-blue-600 rounded-xl"
      >
        <Text className="text-white">Back</Text>
      </TouchableOpacity>
    </View>
  );
}
