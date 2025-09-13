// // screens/BusTracking.js
// import React from "react";
// import { View, Text, TouchableOpacity } from "react-native";

// export default function BusTracking({ navigation, route }) {
//   const bus = route?.params?.bus || null;

//   return (
//     <View className="flex-1 bg-white items-center justify-center">
//       <Text className="text-xl font-bold mb-2">Tracking Bus</Text>
//       {bus ? (
//         <>
//           <Text className="text-lg">{`Bus #${bus.number}`}</Text>
//           <Text className="text-gray-600 mb-5">{`${bus.from} → ${bus.to}`}</Text>
//         </>
//       ) : (
//         <Text className="text-gray-500">No bus selected</Text>
//       )}

//       {/* Placeholder Map */}
//       <View className="w-80 h-80 bg-gray-200 rounded-xl items-center justify-center">
//         <Text className="text-gray-500">[ Map with real-time bus tracking ]</Text>
//       </View>

//       <TouchableOpacity
//         className="mt-6 bg-blue-600 px-6 py-3 rounded-xl"
//         onPress={() => navigation.goBack()}
//       >
//         <Text className="text-white font-semibold">Back</Text>
//       </TouchableOpacity>
//     </View>
//   );
// }

// screens/BusTracking.js
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
// import { ArrowLeft, Clock, Users } from "lucide-react-native";

const mapImage = require('../../assets/images/map.png');
const logo = require('../../assets/images/cg-yatri-logo.png');

export default function BusTracking() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white pt-5">
      {/* Header */}
      <View className="flex-row items-center justify-between px-6 py-2 border-b border-gray-200 mb-1">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Text className="text-4xl font-bold">←</Text>
        </TouchableOpacity>

        <Text className="text-lg font-semibold mt-5 mr-32">Live Bus Tracking</Text>
        <TouchableOpacity onPress={() => navigation.navigate('HomeScreen')}>
          <Image
            source={logo} // apna logo yaha add karo
            className="w-8 h-8"
            resizeMode="contain"
          />
        </TouchableOpacity>
      </View>

      <ScrollView contentContainerStyle={{ paddingBottom: 20 }}>
        {/* Map Section (Dummy Image for now) */}
        <Image
          source={mapImage} // apni map image dal dena
          className="w-full h-[450px]"
          resizeMode="cover"
        />

        {/* Bus Info */}
        <View className="p-4">
          <View className="flex-row justify-between items-center">
            <Text className="text-blue-600 font-semibold text-base">
              Bus 2311
            </Text>
            <Text className="text-gray-800 font-bold text-base">$30.00</Text>
          </View>

          <Text className="text-gray-700 mt-1">Raipur City → Pandri</Text>

          {/* Timing and Type */}
          <View className="mt-2">
            <Text className="text-gray-600">
              Departs: 10:00 AM | Arrives: 10:20 AM
            </Text>
            <Text className="text-gray-600">
              {' '}
              Duration: 45 min | Type: AC Bus
            </Text>
            <View className="flex-row items-center mt-1">
              {/* <Users size={16} color="gray" /> */}
              <Text className="text-gray-600 ml-1">No. of Passengers: 1</Text>
            </View>
          </View>

          {/* Fare Breakdown */}
          <View className="mt-4 border-t border-gray-200 pt-3">
            <View className="flex-row justify-between mb-1">
              <Text className="text-gray-700">Base Fare</Text>
              <Text className="text-gray-700">30.00</Text>
            </View>
            <View className="flex-row justify-between mb-1">
              <Text className="text-gray-700">Taxes & Fees</Text>
              <Text className="text-gray-700">5.00</Text>
            </View>
            <View className="flex-row justify-between font-semibold">
              <Text className="text-gray-900 font-semibold">Total Amount</Text>
              <Text className="text-gray-900 font-semibold">35.00</Text>
            </View>
          </View>

          {/* Payment Button */}
          <TouchableOpacity
            onPress={() => navigation.navigate('ComingSoon')}
            className="mt-5 bg-blue-600 rounded-xl py-3 items-center"
          >
            <Text className="text-white font-semibold">Proceed to Payment</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
