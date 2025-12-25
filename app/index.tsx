import { View, Text, Button } from 'react-native';
import { useRouter } from 'expo-router';

export default function OnboardingScreenPage() {
  const router = useRouter();

  return (
    <View style={{ flex: 1, justifyContent: 'center', padding: 24 }}>
      <Text style={{ fontSize: 48, fontWeight: 'bold', marginBottom: 16 }}>
        GPS notes for Adventurers
      </Text>

      <Text style={{ fontSize: 44, marginBottom: 24 }}>
        React Native App
      </Text>

      <Button
        title="Get Started!"
        onPress={() => router.push('/locationScreen')}
      />
    </View>
  );
}
