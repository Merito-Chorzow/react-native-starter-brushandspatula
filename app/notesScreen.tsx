import NetInfo from "@react-native-community/netinfo";
import { useEffect, useState } from "react";
import { Button, FlatList, Text, TextInput, View } from "react-native";

type Post = {
  id: number;
  title: string;
};

type Note = {
  id: number;
  title: string;
  content: string;
};

export default function NotesScreenPage() {
  const [isOnline, setOnline] = useState(true);
  const [posts, setPosts] = useState<Post[]>([]);
  const [notes, setNotes] = useState<Note[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showNotesForm, setShowNotesForm] = useState(false);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  useEffect(() => {
    const checkOnlineStatus = NetInfo.addEventListener((state) => {
      setOnline(!!state.isConnected && !!state.isInternetReachable);
    });
    return () => checkOnlineStatus();
  }, []);

  const getPosts = async () => {
    try {
      setError(null);
      const response = await fetch(
        "https://my-json-server.typicode.com/typicode/demo/posts"
      );
      const data: Post[] = await response.json();
      setPosts(data);
    } catch {
      setError("Failed to fetch posts from API.");
    }
  };

  let displayMessage = "";

  {
    !isOnline &&
      (displayMessage =
        "You are offline. Please check your internet connection.");
  }

  const addNote = () => {
    if (!title || !content) {
      setError("Title and content are required.");
      return;
    }

    const newNote: Note = {
      id: Date.now(),
      title,
      content,
    };

    setNotes((prev) => [newNote, ...prev]);
    setTitle("");
    setContent("");
    setShowNotesForm(false);
    setError(null);
  };

  return (
    <View style={{ flex: 1, padding: 24, gap: 16 }}>
      <Text style={{ fontSize: 36 }}>Notes</Text>

      <Button title="Add note" onPress={() => setShowNotesForm(true)} />
      <Button title="Get example posts from API" onPress={getPosts} />

      {showNotesForm && (
        <View style={{ gap: 12 }}>
          <TextInput
            placeholder="Title"
            value={title}
            onChangeText={setTitle}
            style={{ borderWidth: 1, padding: 10 }}
          />

          <TextInput
            placeholder="Content"
            value={content}
            onChangeText={setContent}
            multiline
            style={{ borderWidth: 1, padding: 10, height: 80 }}
          />

          {error && <Text style={{ color: "red" }}>{error}</Text>}

          <Button title="Save note" onPress={addNote} />
          <Button title="Cancel" onPress={() => setShowNotesForm(false)} />
        </View>
      )}

      {notes.length > 0 && (
        <>
          <Text style={{ fontSize: 22, marginTop: 16 }}>My notes</Text>
          <FlatList
            data={notes}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <View style={{ marginBottom: 12 }}>
                <Text style={{ fontSize: 36 }}>{item.title}</Text>
                <Text>{item.content}</Text>
              </View>
            )}
          />
        </>
      )}

      {posts.length > 0 && (
        <>
          <Text style={{ fontSize: 22, marginTop: 16 }}>
            Example posts from API
          </Text>
          <FlatList
            data={posts}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => (
              <Text style={{ fontSize: 36 }}>{item.title}</Text>
            )}
          />
        </>
      )}
      <Text style={{ fontSize: 28 }}>{displayMessage}</Text>
    </View>
  );
}
