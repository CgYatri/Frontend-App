import { View, Text, StyleSheet, PermissionsAndroid, Platform } from 'react-native';
import React, { useEffect, useState } from 'react';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import GetLocation from 'react-native-get-location';

const GoogleMap = () => {
  const [permissionGranted, setPermissionGranted] = useState(false);
  const [region, setRegion] = useState(null);

  useEffect(() => {
    _getLocationPermission();
  }, []);

  async function _getLocationPermission() {
    if (Platform.OS === 'android') {
      try {
        const granted = await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          {
            title: 'Location Permission',
            message: 'Required permission to access your location.',
            buttonNeutral: 'Ask Me Later',
            buttonNegative: 'Cancel',
            buttonPositive: 'OK',
          },
        );
        if (granted === PermissionsAndroid.RESULTS.GRANTED) {
          setPermissionGranted(true);
          console.log('You can use the location');
          _getCurrentLocation();
        } else {
          console.log('Location permission denied');
        }
      } catch (err) {
        console.warn(err);
      }
    }
  }

  function _getCurrentLocation() {
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 60000,
    })
      .then(location => {
        console.log("My current location is ", location);
        setRegion({
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.015,
          longitudeDelta: 0.0121,
        });
      })
      .catch(error => {
        console.warn(error.code, error.message);
      });
  }

  if (!permissionGranted) return <View><Text>Permission not granted</Text></View>;

  if (!region) return <View><Text>Fetching current location...</Text></View>;

  return (
    <View className='flex-1'>
      <MapView
      className='flex-1'
        provider={PROVIDER_GOOGLE}
        style={styles.map}
        showsUserLocation={true}   // 👈 blue dot for current location
        region={region}            // 👈 focus on current location
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { ...StyleSheet.absoluteFillObject },
  map: { ...StyleSheet.absoluteFillObject },
});

export default GoogleMap;
