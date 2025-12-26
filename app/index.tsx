import NetInfo from "@react-native-community/netinfo";
import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function OnboardingScreenPage() {
  const router = useRouter();
  const [isOnline, setOnline] = useState<boolean>(true);

  useEffect(() => {
    const checkOnlineStatus = NetInfo.addEventListener((state) => {
      setOnline(state.isConnected && state.isInternetReachable ? true : false);
    });
    return () => {
      checkOnlineStatus();
    };
  }, []);

  let displayMessage = "";

  {
    !isOnline &&
      (displayMessage =
        "You are offline. Please check your internet connection.");
  }

  return (
    <View style={{ flex: 1, justifyContent: "center", padding: 24 }}>
      <Text style={{ fontSize: 48, fontWeight: "bold", marginBottom: 16 }}>
        GPS notes for Adventurers
      </Text>

      <Text style={{ fontSize: 44, marginBottom: 24 }}>React Native App</Text>

      <Button
        title="Get Started!"
        onPress={() => router.push("/locationScreen")}
      />
      <Text style={{ fontSize: 18 }}>{displayMessage}</Text>
    </View>
  );
}
