import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, Image, FlatList, ScrollView, StyleSheet } from 'react-native';
import ServicesGrid from '../../components/ServicesGrid';
import FavoriteRoutesList from '../../components/FavoriteRoutesList';
import MetroMapPlaceholder from '../../components/MetroMapPlaceholder';
import BottomNav from '../../components/BottomNav';

const logo = require('../../assets/images/cg-yatri-logo.png');
const promoImages = [
  require('../../assets/images/promo3.png'),
  require('../../assets/images/promo2.png'),
  require('../../assets/images/promo3.png'),
];
const mapImage = require('../../assets/images/map.png');

const NAVBAR_HEIGHT = 80;
const MAP_HEIGHT = 180;

export default function HomeScreen({ navigation }) {
  const mapRef = useRef(null);

  const [region] = useState({
    latitude: 21.2514,
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
    <>
      {/* Fixed Top Navbar */}
      <View style={[styles.navbar, styles.shadow]}>
        <View className="flex-row items-center justify-between px-4 pt-12 pb-4">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => mapRef.current?.animateToRegion(region, 400)}
            activeOpacity={0.8}
          >
            <Image source={logo} className="w-9 h-9" resizeMode="contain" />
            
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Referral')}
            className="px-3 py-2 rounded-full bg-white border border-gray-300"
            activeOpacity={0.8}
          >
            <Text className="text-xs font-medium">Have Referral</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Current Location Input (fixed below navbar) */}
      <View style={styles.locationInputContainer}>
        <TouchableOpacity
          onPress={() => goToLocationSearch()}
          className="bg-white rounded-2xl border border-gray-200 px-3 py-3 shadow-sm"
          activeOpacity={0.8}
        >
          <Text className="text-gray-500">Current Location autofetched</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content (map + rest) */}
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{
          paddingBottom: 80,
          paddingTop: NAVBAR_HEIGHT + 70, // adjust for navbar + location input
        }}
        showsVerticalScrollIndicator={false}
      >
        {/* Map */}
        <View style={styles.mapScrollContainer}>
          <Image
            source={mapImage}
            style={styles.mapImage}
            resizeMode="cover"
          />
        </View>

        {/* Destination Input & Favourite Routes */}
        <View className="px-4 mt-4">
          {/* Destination */}
          <TouchableOpacity
            onPress={() => goToLocationSearch()}
            className="bg-white rounded-2xl border border-gray-200 px-3 py-3 shadow-sm"
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

          {/* Favourite Routes */}
          <View className="mt-4">
            <FavoriteRoutesList
              routes={favouriteRoutes}
              onPressRoute={r => goToLocationSearch({ from: r.from, to: r.to })}
            />
          </View>
        </View>

        {/* SERVICES */}
        <View className="px-4 mt-6">
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
        <View className="px-4 mt-6">
          <MetroMapPlaceholder />
        </View>

        {/* PROMOS */}
        <View className="px-4 mt-6 mb-4">
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
      </ScrollView>
      {/* Bottom nav (static) */}
      <BottomNav />
    </>
  );
}

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: NAVBAR_HEIGHT,
    backgroundColor: '#fff',
    zIndex: 10,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,
  },
  shadow: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.08,
    shadowRadius: 4,
    elevation: 3,
  },
  locationInputContainer: {
    position: 'absolute',
    top: NAVBAR_HEIGHT,
    left: 0,
    right: 0,
    zIndex: 9,
    paddingHorizontal: 16,
    paddingTop: 8,
    backgroundColor: '#fff',
  },
  mapScrollContainer: {
    alignItems: 'center',
    marginTop: 10,
  },
  mapImage: {
    width: '95%',
    height: MAP_HEIGHT,
    borderRadius: 18,
  },
});
