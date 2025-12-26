import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { FlatList, Text, View } from "react-native";

type Note = {
  id: number;
  title: string;
};

export default function NotesScreenPage() {
  const [isOnline, setOnline] = useState(true);
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const checkOnlineStatus = NetInfo.addEventListener((state) => {
      setOnline(state.isConnected && state.isInternetReachable ? true : false);
    });
    return () => {
      checkOnlineStatus();
    };
  }, []);

  useEffect(() => {
    if (isOnline) {
      getNotes();
    }
  }, [isOnline]);

  const getNotes = async () => {
    try {
      setError(null);

      const response = await fetch(
        "https://my-json-server.typicode.com/typicode/demo/posts"
      );
      const data: Note[] = await response.json();
      setNotes(data);
    } catch (err) {
      setError("Failed to fetch notes.");
    }
  };

  let displayMessage = "";

  {
    !isOnline &&
      (displayMessage =
        "You are offline. Please check your internet connection.");
  }

  return (
    <View style={{ flex: 1, padding: 24 }}>
      <Text style={{ fontSize: 44, marginBottom: 20 }}>Notes</Text>

      <FlatList
        data={notes}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={{ marginBottom: 16 }}>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>
              {item.title}
            </Text>
          </View>
        )}
      />

      {error && <Text style={{ color: "red" }}>{error}</Text>}
    </View>
  );
}
