import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const SettingsScreen = () => {
  return (
    <View>
      <Text>SettingsScreen</Text>
      <Link href={"/(tabs)/(settings)/profile"}>Go to profile</Link>
      <Link href={"/(tabs)/(settings)/faq"}>Go to faq</Link>
    </View>
  );
};

export default SettingsScreen;
