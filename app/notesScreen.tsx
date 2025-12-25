import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";

export default function NotesScreenPage() {
  const [isOnline, setOnline] = useState<boolean>(true);

  useEffect(() => {
    const checkOnlineStatus = NetInfo.addEventListener((state) => {
      setOnline(state.isConnected && state.isInternetReachable ? true : false);
    });
    return () => {
      checkOnlineStatus();
    };
  }, []);

  let displayMessage = "Loading...";

  {
    !isOnline &&
      (displayMessage =
        "You are offline. Please check your internet connection.");
  }

  return (
    <View style={{ flex: 1, padding: 24, marginTop: 20 }}>
      <Text style={{ fontSize: 44, marginBottom: 20 }}>Notes Screen</Text>
      <Text style={{ fontSize: 18 }}>{displayMessage}</Text>
    </View>
  );
}
