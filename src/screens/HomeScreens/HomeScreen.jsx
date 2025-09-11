import React, { useEffect, useRef, useState } from "react";
import { View, Text, TouchableOpacity, Image, PermissionsAndroid, Platform, FlatList, StatusBar } from "react-native";
import MapView, { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
import ServicesGrid from "../../components/ServicesGrid";
import FavoriteRoutesList from "../../components/FavoriteRoutesList";
import MetroMapPlaceholder from "../../components/MetroMapPlaceholder";
import BottomNav from "../../components/BottomNav";

const logo = require("../../assets/images/cg-yatri-logo.png");

const promoImages = [
  require("../../assets/images/logo4.png"),
  require("../../assets/images/logo4.png"),
  require("../../assets/images/logo4.png"),
];

export default function HomeScreen({ navigation }) {
  const mapRef = useRef(null);
  const [region, setRegion] = useState({
    latitude: 21.2514,       // Raipur approx
    longitude: 81.6296,
    latitudeDelta: 0.05,
    longitudeDelta: 0.05,
  });
  const [hasLocation, setHasLocation] = useState(false);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       if (Platform.OS === "android") {
  //         const ok = await PermissionsAndroid.request(
  //           PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION
  //         );
  //         if (ok !== PermissionsAndroid.RESULTS.GRANTED) return;
  //       }
  //       Geolocation.getCurrentPosition(
  //         pos => {
  //           const { latitude, longitude } = pos.coords;
  //           const next = { ...region, latitude, longitude };
  //           setRegion(next);
  //           setHasLocation(true);
  //           mapRef.current?.animateToRegion(next, 600);
  //         },
  //         err => console.log("Location error:", err),
  //         { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
  //       );
  //     } catch (e) {
  //       console.log(e);
  //     }
  //   })();
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // mock: favourite routes (in real app, compute from history)
  const favouriteRoutes = [
    { id: "1", from: "Pandri Bus Stand", to: "GECR, Sejbahar" },
    { id: "2", from: "Jaistambh Chowk", to: "Telibandha" },
    { id: "3", from: "Railway Station", to: "Ambuja Mall" },
  ];

  const goToLocationSearch = (prefill) => {
    navigation.navigate("LocationSearch", { prefill });  // {from, to}
  };

  return (
    <>
    <StatusBar backgroundColor="white" barStyle="dark-content" />
     <View className="flex-1 bg-white pt-7 ">
      {/* MAP BACKDROP */}
      <View className="absolute inset-0 ">

        {/* <MapView
          ref={mapRef}
          style={{ flex: 1 }}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          initialRegion={region}
        >
          {hasLocation && (
            <Marker coordinate={{ latitude: region.latitude, longitude: region.longitude }} />
          )}
        </MapView> */}
      </View>

      {/* CONTENT OVER MAP */}
      <View className="flex-1">
        {/* Top bar */}
        <View className="mt-4 px-4 flex-row items-center justify-between">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => {
              // stay on Home; optional: scroll-to-top or recenter map
              mapRef.current?.animateToRegion(region, 400);
            }}
            activeOpacity={0.8}
          >
            <Image source={logo} className="w-9 h-9" resizeMode="contain" />
            <Text className="ml-2 font-semibold">CG Yatri</Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("Referral")}
            className="px-3 py-2 rounded-full bg-white/90 border border-gray-300"
            activeOpacity={0.8}
          >
            <Text className="text-xs font-medium">Have Referral</Text>
          </TouchableOpacity>
        </View>

        {/* Search boxes */}
        <View className="px-4 mt-3">
          {/* Current location */}
          <TouchableOpacity
            onPress={() => goToLocationSearch()}
            className="bg-white rounded-2xl border border-gray-200 px-3 py-3 shadow-sm"
            activeOpacity={0.8}
          >
            <Text className="text-gray-500">Current Location autofetched</Text>
          </TouchableOpacity>

          {/* Where are you going */}
          <TouchableOpacity
            onPress={() => goToLocationSearch()}
            className="bg-white rounded-2xl border border-gray-200 px-3 py-3 mt-3 shadow-sm"
            activeOpacity={0.8}
          >
            <Text className="text-gray-500">Where are you going ?</Text>
            <View className="mt-2 flex-row">
              {["Airport", "Station", "Bus Station"].map((t) => (
                <View key={t} className="px-3 py-1 mr-2 rounded-full bg-blue-100">
                  <Text className="text-xs text-blue-600">{t}</Text>
                </View>
              ))}
            </View>
          </TouchableOpacity>
        </View>

        {/* FAVOURITE ROUTES */}
        <View className="mt-4">
          <FavoriteRoutesList
            routes={favouriteRoutes}
            onPressRoute={(r) => goToLocationSearch({ from: r.from, to: r.to })}
          />
        </View>

        {/* Services */}
        <View className="px-4 mt-2">
          <Text className="text-base font-semibold mb-2">CG Yatri Services</Text>
          <ServicesGrid
            onPressBus={() => goToLocationSearch()} // City Bus → same LocationSearch
            onPressOther={(serviceKey) => navigation.navigate("ServicesDetail", { serviceKey })}
            onPressSeeAll={() => navigation.navigate("ServicesDetail", { serviceKey: "all" })}
          />
        </View>

        {/* Metro map placeholder */}
        <View className="px-4 mt-2">
          <MetroMapPlaceholder />
        </View>

        {/* Horizontal promos */}
        <View className="mt-3">
          <FlatList
            data={promoImages}
            keyExtractor={(_, i) => `p-${i}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ItemSeparatorComponent={() => <View className="w-3" />}
            renderItem={({ item }) => (
              <Image source={item} className="w-64 h-28 rounded-xl bg-gray-200" resizeMode="cover" />
            )}
          />
        </View>

        {/* Second horizontal section */}
        <View className="mt-3 mb-20">
          <FlatList
            data={promoImages}
            keyExtractor={(_, i) => `q-${i}`}
            horizontal
            showsHorizontalScrollIndicator={false}
            contentContainerStyle={{ paddingHorizontal: 16 }}
            ItemSeparatorComponent={() => <View className="w-3" />}
            renderItem={({ item }) => (
              <Image source={item} className="w-64 h-28 rounded-xl bg-gray-200" resizeMode="cover" />
            )}
          />
        </View>
      </View>

      {/* Bottom nav placeholder (space) */}
      <BottomNav />
    </View>
    </>
   
  );
}
