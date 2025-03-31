import { Stack } from "expo-router";
import { colors } from "@/assets/ui/colors";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={
        {
          // headerStyle: {
          //   backgroundColor: colors.primary,
          // },
          // headerTintColor: colors.primaryForeground,
          // headerTitleStyle: {
          //   fontWeight: "bold",
          // },
          // headerTransparent: true,
          // headerBlurEffect: "extraLight",
          // headerLargeTitle:true,
        }
      }
    >
      <Stack.Screen
        name="index"
        options={{
          // title: "First Page",
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(tabs)"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="(auth)"
        options={{
          headerShown: false,
        }}
      />
    </Stack>
  );
}
