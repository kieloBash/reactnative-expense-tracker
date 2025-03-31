import React from "react";
import { Stack } from "expo-router";

const SettingsLayout = () => {
  return (
    <Stack>
      <Stack.Screen name="_index" options={{ headerShown: false }} />
      <Stack.Screen name="profile" />
      <Stack.Screen name="faq" />
    </Stack>
  );
};

export default SettingsLayout;
