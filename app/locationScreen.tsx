import * as Location from "expo-location";
import React from "react";
import { Button, Text, View } from "react-native";

export default function LocationScreenPage() {
  const [location, setLocation] = React.useState<string | null>(null);
  const [errorMsg, setErrorMsg] = React.useState<string | null>(null);

  async function fetchLocation() {
    let { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted") {
      setErrorMsg("Permission to access location was denied");
      return;
    }

    let location = await Location.getCurrentPositionAsync({});
    setLocation(
      `Latitude: ${location.coords.latitude}, Longitude: ${location.coords.longitude}`
    );
  }

  let displayMessage = "Loading location...";
  if (errorMsg) {
    displayMessage = errorMsg;
  } else if (location) {
    displayMessage = JSON.stringify(location);
  }

  return (
    <View style={{ flex: 1, padding: 24, marginTop: 20, gap: 15 }}>
      <Text style={{ fontSize: 44, marginBottom: 20 }}>
        Your current GPS Location
      </Text>
      <Button
        title="Get your Location!"
        onPress={() => {
          fetchLocation();
        }}
      />

      <Text style={{ fontSize: 18 }}>{displayMessage}</Text>

      <Button
        title="Go to Notes"
        //todo tu bedzie routing do notes page
      />
    </View>
  );
}
