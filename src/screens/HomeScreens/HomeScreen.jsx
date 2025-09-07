import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList } from 'react-native';
import ServicesGrid from '../../components/ServicesGrid';
import FavoriteRoutesList from '../../components/FavoriteRoutesList';
import MetroMapPlaceholder from '../../components/MetroMapPlaceholder';
import BottomNav from '../../components/BottomNav';
import GoogleMap from '../../components/GoogleMap';

const logo = require('../../assets/images/cg-yatri-logo.png');

const promoImages = [
  require('../../assets/images/logo4.png'),
  require('../../assets/images/logo4.png'),
  require('../../assets/images/logo4.png'),
];

export default function HomeScreen({ navigation }) {
  const mapRef = useRef(null);

  const [region] = useState({
    latitude: 21.2514, // Raipur approx
    longitude: 81.6296,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });

  const favouriteRoutes = [
    { id: '1', from: 'Pandri Bus Stand', to: 'GECR, Sejbahar' },
    { id: '2', from: 'Jaistambh Chowk', to: 'Telibandha' },
    { id: '3', from: 'Railway Station', to: 'Ambuja Mall' },
  ];

  const goToLocationSearch = prefill => {
    navigation.navigate('LocationSearch', { prefill });
  };

  return (
    <View className="flex-1 bg-white">
      {/* MAP BACKGROUND */}
      <GoogleMap ref={mapRef} />

      {/* TOP OVERLAY navbar */}
      <View className="absolute top-0 left-0 right-0 mt-4 px-4">
        {/* Top bar */}
        <View className="flex-row items-center justify-between">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => mapRef.current?.animateToRegion(region, 400)}
            activeOpacity={0.8}
          >
            <Image source={logo} className="w-9 h-9" resizeMode="contain" />
            <Text className="ml-2 font-semibold text-white bg-black/40 px-2 py-1 rounded">
              CG Yatri
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate('Referral')}
            className="px-3 py-2 rounded-full bg-white/90 border border-gray-300"
            activeOpacity={0.8}
          >
            <Text className="text-xs font-medium">Have Referral</Text>
          </TouchableOpacity>
        </View>

        {/* Search boxes */}
      </View>

      {/* BOTTOM SHEET OVERLAY */}
      <View className="absolute top-64 left-0 right-0">
        {/* Search boxes */}
        <View className="">
          {/* Current location */}
          <TouchableOpacity
            onPress={() => goToLocationSearch()}
            className="bg-white rounded-2xl border border-gray-200 px-3 py-3 shadow-sm"
            activeOpacity={0.8}
          >
            <Text className="text-gray-500">Current Location autofetched</Text>
          </TouchableOpacity>

          {/* Destination */}
          <TouchableOpacity
            onPress={() => goToLocationSearch()}
            className="bg-white rounded-2xl border border-gray-200 px-3 py-3 mt-3 shadow-sm"
            activeOpacity={0.8}
          >
            <Text className="text-gray-500">Where are you going ?</Text>
            <View className="mt-2 flex-row">
              {['Airport', 'Station', 'Bus Station'].map(t => (
                <View
                  key={t}
                  className="px-3 py-1 mr-2 rounded-full bg-blue-100"
                >
                  <Text className="text-xs text-blue-600">{t}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        </View>

        {/* BOTTOM SHEET CONTENT */}
        <View className="bg-white rounded-t-3xl p-4 max-h-[60%]">
          {/* FAVOURITE ROUTES */}
          <FavoriteRoutesList
            routes={favouriteRoutes}
            onPressRoute={r => goToLocationSearch({ from: r.from, to: r.to })}
          />

          {/* SERVICES */}
          <View className="mt-2">
            <Text className="text-base font-semibold mb-2">
              CG Yatri Services
            </Text>
            <ServicesGrid
              onPressBus={() => goToLocationSearch()}
              onPressOther={serviceKey =>
                navigation.navigate('ServicesDetail', { serviceKey })
              }
              onPressSeeAll={() =>
                navigation.navigate('ServicesDetail', { serviceKey: 'all' })
              }
            />
          </View>

          {/* METRO MAP */}
          <View className="mt-2">
            <MetroMapPlaceholder />
          </View>

          {/* PROMOS */}
          <View className="mt-3">
            <FlatList
              data={promoImages}
              keyExtractor={(_, i) => `p-${i}`}
              horizontal
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={{ paddingHorizontal: 4 }}
              ItemSeparatorComponent={() => <View className="w-3" />}
              renderItem={({ item }) => (
                <Image
                  source={item}
                  className="w-64 h-28 rounded-xl bg-gray-200"
                  resizeMode="cover"
                />
              )}
            />
          </View>
        </View>

        {/* Bottom nav (static) */}
        <BottomNav />
      </View>
    </View>
  );
}
