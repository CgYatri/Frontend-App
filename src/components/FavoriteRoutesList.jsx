import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";

export default function FavoriteRoutesList({ routes, onPressRoute }) {
  return (
    <ScrollView horizontal showsHorizontalScrollIndicator={false} contentContainerStyle={{ paddingHorizontal: 16 }}>
      {routes.map((r) => (
        <TouchableOpacity
          key={r.id}
          onPress={() => onPressRoute(r)}
          className="mr-3 bg-white rounded-2xl border border-gray-200 px-3 py-3 shadow-sm"
          activeOpacity={0.9}
        >
          <Text className="text-[11px] text-gray-500">Fav route</Text>
          <View className="mt-1">
            <Text className="text-xs font-semibold">{r.from}</Text>
            <Text className="text-xs text-gray-600">→ {r.to}</Text>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
