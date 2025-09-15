  // screens/LocationSearch.js
import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView, Image, Alert } from "react-native";
import BusPopup from "../../components/BusPopup";
const mapImage = require('../../assets/images/map.png');

// Dummy locations for auto-suggestion
const locations = [
  "Pandri", "Durg", "Sejbahar", "Raipur", "Telibandha", "Ambuja Mall", "Jaistambh Chowk"
];

export default function LocationSearch({ navigation, route }) {
  const prefill = route?.params?.prefill || {};
  const [from, setFrom] = useState(prefill.from ?? "");
  const [to, setTo] = useState(prefill.to ?? "");
  const [popupVisible, setPopupVisible] = useState(false);

  // Auto-suggestion states
  const [fromSuggestions, setFromSuggestions] = useState([]);
  const [toSuggestions, setToSuggestions] = useState([]);

  // Suggestion logic
  const handleFromChange = (text) => {
    setFrom(text);
    setFromSuggestions(
      text.length > 0
        ? locations.filter(loc => loc.toLowerCase().includes(text.toLowerCase()))
        : []
    );
  };
  const handleToChange = (text) => {
    setTo(text);
    setToSuggestions(
      text.length > 0
        ? locations.filter(loc => loc.toLowerCase().includes(text.toLowerCase()))
        : []
    );
  };

  // Search button logic
  const handleSearch = () => {
    if (!from.trim() || !to.trim()) {
      Alert.alert("Please enter input");
      return;
    }
    setPopupVisible(true);
  };

  return (
    <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined} className="flex-1 bg-white pt-8">
      <ScrollView className="flex-1">
        {/* Header */}
        <View className="px-4 pt-4 flex-row justify-between items-center">
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text className="text-2xl">←</Text>
          </TouchableOpacity>
          <Text className="text-lg font-semibold">Live Bus Tracking</Text>
          <TouchableOpacity onPress={() => navigation.navigate("HomeScreen")}>
            <Text className="text-lg">🏠</Text>
          </TouchableOpacity>
        </View>

        {/* Inputs with Auto-suggestion */}
        <View className="px-4 mt-4">
          <Text className="text-xs text-gray-500 mb-1">From</Text>
          <TextInput
            value={from}
            onChangeText={handleFromChange}
            placeholder="Enter source"
            className="border border-gray-300 rounded-xl px-3 py-3"
          />
          {fromSuggestions.length > 0 && (
            <View className="bg-white border border-gray-200 rounded-lg mb-2">
              {fromSuggestions.map((suggestion) => (
                <TouchableOpacity
                  key={suggestion}
                  onPress={() => {
                    setFrom(suggestion);
                    setFromSuggestions([]);
                  }}
                  className="px-3 py-2"
                >
                  <Text>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <Text className="text-xs text-gray-500 mb-1 mt-3">To</Text>
          <TextInput
            value={to}
            onChangeText={handleToChange}
            placeholder="Enter destination"
            className="border border-gray-300 rounded-xl px-3 py-3"
          />
          {toSuggestions.length > 0 && (
            <View className="bg-white border border-gray-200 rounded-lg mb-2">
              {toSuggestions.map((suggestion) => (
                <TouchableOpacity
                  key={suggestion}
                  onPress={() => {
                    setTo(suggestion);
                    setToSuggestions([]);
                  }}
                  className="px-3 py-2"
                >
                  <Text>{suggestion}</Text>
                </TouchableOpacity>
              ))}
            </View>
          )}

          <TouchableOpacity
            className="mt-5 bg-blue-600 rounded-xl py-3 items-center"
            onPress={handleSearch}
          >
            <Text className="text-white font-semibold">Search</Text>
          </TouchableOpacity>
        </View>

        {/* Dummy Map */}
        <View className="mx-4 mt-6">
          <Image
            source={mapImage}
            className="w-full h-90 rounded-xl"
          />
        </View>

        {/* Horizontal Bus List */}
        {/* Remove or hide this section if you want buses only after search */}
      </ScrollView>

      {/* Popup Component */}
      <BusPopup
        visible={popupVisible}
        onClose={() => setPopupVisible(false)}
        onSelect={(bus) => {
          setPopupVisible(false);
          navigation.navigate("BusTracking", { bus });
        }}
        navigation={navigation}
      />
    </KeyboardAvoidingView>
  );
}
