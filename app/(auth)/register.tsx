import { View, Text } from "react-native";
import React from "react";
import { Link } from "expo-router";

const RegisterScreen = () => {
  return (
    <View>
      <Text>RegisterScreen</Text>
      <Link href={"/(auth)/login"}>Already have an account</Link>
    </View>
  );
};

export default RegisterScreen;
