import React, { useEffect, useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform } from "react-native";
import Geolocation from "react-native-geolocation-service";

export default function LocationSearch({ navigation, route }) {
  const prefill = route?.params?.prefill || {};
  const [from, setFrom] = useState(prefill.from ?? "");
  const [to, setTo] = useState(prefill.to ?? "");

  // useEffect(() => {
  //   // autofill current location in 'from' if empty
  //   if (!from) {
  //     Geolocation.getCurrentPosition(
  //       pos => {
  //         const { latitude, longitude } = pos.coords;
  //         setFrom(`My Location (${latitude.toFixed(4)}, ${longitude.toFixed(4)})`);
  //       },
  //       err => console.log(err),
  //       { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //     );
  //   }
  // }, []);

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} className="flex-1 bg-white">
      <View className="px-4 pt-4">
        <Text className="text-xl font-semibold">Choose route</Text>

        <View className="mt-4">
          <Text className="text-xs text-gray-500 mb-1">From</Text>
          <TextInput
            value={from}
            onChangeText={setFrom}
            placeholder="Current location"
            className="border border-gray-300 rounded-xl px-3 py-3"
          />
        </View>

        <View className="mt-3">
          <Text className="text-xs text-gray-500 mb-1">To</Text>
          <TextInput
            value={to}
            onChangeText={setTo}
            placeholder="Where are you going?"
            className="border border-gray-300 rounded-xl px-3 py-3"
          />
        </View>

        <TouchableOpacity
          className="mt-5 bg-blue-600 rounded-xl py-3 items-center"
          onPress={() => navigation.goBack()}
          activeOpacity={0.9}
        >
          <Text className="text-white font-semibold">Save & Back</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}
