// components/BusPopup.js
import React from "react";
import { View, Text, TouchableOpacity, Modal, FlatList } from "react-native";
// import { X } from "lucide-react-native";

const dummyBuses = [
  { id: "1", number: "1013", from: "Pandri", to: "Durg", fare: "₹30", eta: "12 min" },
  { id: "2", number: "1014", from: "Sejbahar", to: "Raipur", fare: "₹25", eta: "8 min" },
  { id: "3", number: "1014", from: "Sejbahar", to: "Raipur", fare: "₹25", eta: "8 min" },
  { id: "4", number: "1014", from: "Sejbahar", to: "Raipur", fare: "₹25", eta: "8 min" },
  { id: "5", number: "1014", from: "Sejbahar", to: "Raipur", fare: "₹25", eta: "8 min" },
  { id: "6", number: "1014", from: "Sejbahar", to: "Raipur", fare: "₹25", eta: "8 min" },
 
];

export default function BusPopup({ visible, onClose, onSelect, navigation }) {
  return (
    <Modal visible={visible} animationType="slide" transparent>
      <View className="flex-1 bg-black/50 justify-end">
        <View className="bg-white rounded-t-2xl p-4">
          <View className="flex-row justify-between items-center mb-3">
            <Text className="text-lg font-semibold">Available Buses</Text>
            <TouchableOpacity onPress={onClose}>
              {/* <X size={24} color="black" /> */}
            </TouchableOpacity>
          </View>

          <FlatList
            data={dummyBuses}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <View className="border border-gray-200 rounded-xl p-3 mb-3">
                <Text className="text-base font-semibold">Bus #{item.number}</Text>
                <Text className="text-sm text-gray-600">
                  {item.from} → {item.to}
                </Text>
                <Text className="text-sm text-gray-600">Fare: {item.fare}</Text>
                <Text className="text-sm text-gray-600">ETA: {item.eta}</Text>

                <TouchableOpacity
                  className="mt-2 bg-blue-600 rounded-lg py-2 items-center"
                  onPress={() => {
                    onSelect?.(item);
                    navigation?.navigate('BusTracking', { bus: item });
                  }}
                >
                  <Text className="text-white font-semibold">Select Bus</Text>
                </TouchableOpacity>
              </View>
            )}
          />
        </View>
      </View>
    </Modal>
  );
}
