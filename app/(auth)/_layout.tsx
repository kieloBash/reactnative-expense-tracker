import React from "react";
import { Stack } from "expo-router";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{}}>
      <Stack.Screen name="register" />
      <Stack.Screen name="login" />
    </Stack>
  );
};

export default AuthLayout;
