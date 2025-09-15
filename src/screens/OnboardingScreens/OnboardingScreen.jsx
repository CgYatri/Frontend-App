import React, { useRef, useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Dimensions,
  StatusBar,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

const { width } = Dimensions.get("window");

// Images
const AppLogo = require("../../assets/images/cg-yatri-logo.png");
const OnboardingIllustration1 = require("../../assets/images/onboarding-illustration1.png");
const OnboardingIllustration2 = require("../../assets/images/onboarding-illustration2.png");
const OnboardingIllustration3 = require("../../assets/images/onboarding-illustration3.png");
const OnboardingIllustration4 = require("../../assets/images/onboarding-illustration4.png");

const slides = [
  {
    id: "1",
    image: OnboardingIllustration1,
    title: "Travel Smart in Chhattisgarh",
    subtitle: "Buses, Autos, Rentals and More in one single App.",
  },
  {
    id: "2",
    image: OnboardingIllustration2,
    title: "No Middleman... You & Driver",
    subtitle: "Book rides directly with drivers...100% goes to driver directly",
  },
  {
    id: "3",
    image: OnboardingIllustration3,
    title: "Your Safety is Guaranteed",
    subtitle: "24 x 7 Servicable S.O.S Support to ensure we are there for you.",
  },
  {
    id: "4",
    image: OnboardingIllustration4,
    title: "Inclusive mobility for all",
    subtitle: "CG Yatri provides every user with quality experience.",
  },
];

export default function OnboardingScreen() {
  const navigation = useNavigation();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const completeOnboarding = async () => {
    await AsyncStorage.setItem("isOnboarded", "true");
    navigation.replace("LoginScreen");
  };

  const handleNext = () => {
    if (currentIndex < slides.length - 1) {
      const nextIndex = currentIndex + 1;
      if (flatListRef.current && nextIndex < slides.length) {
        flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      }
     setCurrentIndex(nextIndex);
    } else {
      completeOnboarding();
    }
  };

  const handleSkip = () => {
    completeOnboarding();
  };

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

  const renderSlide = ({ item }) => (
    <View
      style={{ width, alignItems: "center", justifyContent: "center" }}
      className="px-6"
    >
      <Image
        source={item.image}
        className="w-full h-80"
        resizeMode="contain"
      />
      <Text className="text-3xl font-bold text-center text-gray-800 mt-8">
        {item.title}
      </Text>
      <Text className="text-lg text-center text-gray-500 mt-4 w-80">
        {item.subtitle}
      </Text>
    </View>
  );

  return (
    <SafeAreaView className="flex-1 bg-white">
      <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />

      {/* Skip Button */}
      <View className="flex-row justify-end px-6 pt-4">
        <TouchableOpacity
          onPress={handleSkip}
          className="px-5 py-2 border border-gray-300 rounded-full"
        >
          <Text className="text-gray-600 font-semibold">Skip &gt;</Text>
        </TouchableOpacity>
      </View>

      {/* Logo */}
      <Image
        source={AppLogo}
        className="w-40 h-32 m-auto"
        resizeMode="contain"
      />

      {/* Slides */}
      <FlatList
        ref={flatListRef}
        data={slides}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id}
        renderItem={renderSlide}
        onViewableItemsChanged={onViewableItemsChanged}
        viewabilityConfig={viewConfigRef}
        getItemLayout={(data, index) => ({
          length: width,
          offset: width * index,
          index,
        })}
      />

      {/* Bottom Section */}
      <View className="px-6 pb-8">
        {/* Pagination dots */}
        <View className="flex-row justify-center items-center mb-6">
          {slides.map((_, index) => (
            <View
              key={index}
              style={{
                width: currentIndex === index ? 24 : 8,
                height: 8,
                borderRadius: 4,
                marginHorizontal: 4,
                backgroundColor:
                  currentIndex === index ? "#2563EB" : "#D1D5DB",
              }}
            />
          ))}
        </View>

        {/* Next / Get Started Button */}
        <TouchableOpacity
          onPress={handleNext}
          className="bg-blue-600 w-full py-4 rounded-xl items-center justify-center"
        >
          <Text className="text-white text-lg font-bold">
            {currentIndex === slides.length - 1 ? "Get Started" : "Next"}
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}
