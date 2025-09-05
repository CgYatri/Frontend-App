import React from "react";
import { View, Text } from "react-native";

// Placeholder bottom nav bar – replace with your actual tab bar later
export default function BottomNav() {
  return (
    <View className="absolute bottom-0 left-0 right-0 h-16 bg-white border-t border-gray-200 items-center justify-center">
      <Text className="text-gray-500 text-xs">Bottom Nav (placeholder)</Text>
    </View>
  );
}
