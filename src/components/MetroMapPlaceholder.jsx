import React from "react";
import { View, Text, Image } from "react-native";

// Replace with your actual metro map image later
const temp = require("../assets/images/logo4.png");

export default function MetroMapPlaceholder() {
  return (
    <View className="bg-white rounded-2xl border border-gray-200 overflow-hidden">
      <Image source={temp} className="w-full h-40 bg-gray-100" resizeMode="cover" />
    </View>
  );
}
