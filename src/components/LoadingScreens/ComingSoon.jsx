import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';

const logo = require('../../assets/images/cg-yatri-logo.png');

export default function ComingSoonScreen() {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white p-4 pt-5">
      {/* Back Button */}
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text className="text-4xl font-bold">←</Text>
      </TouchableOpacity>
      {/* Content Centered */}
      <View className="flex-1 justify-center items-center">
        {/* Logo */}
        <Image source={logo} className="w-28 h-28 mb-3" resizeMode="contain" />

        {/* Text */}
        <Text className="text-lg font-medium text-black">Coming Soon...</Text>
      </View>
    </View>
  );
}
