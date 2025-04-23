import { Tabs } from "expo-router";

export default function RootLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{ title: "Home", headerShown: false }}
      />
      <Tabs.Screen
        name="about"
        options={{ title: "About", headerShown: false }}
      />
      <Tabs.Screen
        name="contact"
        options={{ title: "Contact", headerShown: false }}
      />
      <Tabs.Screen
        name="service"
        options={{ title: "Service", headerShown: false }}
      />
      <Tabs.Screen
        name="setting"
        options={{ title: "Setting", headerShown: false }}
      />
    </Tabs>
  );
}
