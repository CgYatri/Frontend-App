import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";

const items = [
  { key: "bus", label: "City Bus", icon: require("../assets/images/logo4.png"), route: "bus" },
  { key: "auto", label: "Auto", icon: require("../assets/images/logo4.png"), route: "auto" },
  { key: "cab", label: "Cab", icon: require("../assets/images/logo4.png"), route: "cab" },
  { key: "metro", label: "CG Metro", icon: require("../assets/images/logo4.png"), route: "metro" },
  { key: "rental", label: "Rental", icon: require("../assets/images/logo4.png"), route: "rental" },
  { key: "mover", label: "Fr. mover", icon: require("../assets/images/logo4.png"), route: "mover" },
];

export default function ServicesGrid({ onPressBus, onPressOther, onPressSeeAll }) {
  return (
    <View>
      <View className="flex-row flex-wrap justify-between">
        {items.map((it) => (
          <TouchableOpacity
            key={it.key}
            className="w-[31%] mb-3 bg-white rounded-2xl border border-gray-200 items-center py-3"
            onPress={() => (it.key === "bus" ? onPressBus() : onPressOther(it.key))}
            activeOpacity={0.9}
          >
            <Image source={it.icon} className="w-9 h-9" resizeMode="contain" />
            <Text className="mt-2 text-xs font-medium">{it.label}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <TouchableOpacity onPress={onPressSeeAll} className="self-start mt-1 px-3 py-1">
        <Text className="text-blue-600 font-medium">See All</Text>
      </TouchableOpacity>
    </View>
  );
}
