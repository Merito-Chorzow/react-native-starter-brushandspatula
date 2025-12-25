import { Button, Text, View } from 'react-native';

export default function LocationScreenPage() {

  return (
    <View style={{ flex: 1, padding: 24, marginTop:20, gap:15 }}>
      <Text style={{ fontSize: 44, marginBottom: 20 }}>
        Your current GPS Location
      </Text>

      <Button
        title="Get your Location!"
        //todo tu pobieranie lokalizacji GPS
      />

      <Button
        title="Go to Notes"
        //todo tu bedzie routing do notes page
      />
    </View>
  );
}
