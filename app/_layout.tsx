import { Stack } from 'expo-router';

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerStyle: {
          backgroundColor: '#f4511e',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontWeight: 'bold',
        },
      }}>
      <Stack.Screen name="index" />
      <Stack.Screen name="signin" />
      <Stack.Screen name="intrests" />
      <Stack.Screen name="details" />
      <Stack.Screen name="otp" />
      <Stack.Screen name="home" />
      <Stack.Screen name="entersym" />
      <Stack.Screen name="admin" />
      <Stack.Screen name="shoptimings" />
      <Stack.Screen name="adminswipe" />
      <Stack.Screen name="signup" />
    </Stack>
  );
}
