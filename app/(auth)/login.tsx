import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Link } from "expo-router";
import axios from "axios";

const LoginScreen = () => {
  const fetchLogin = async () => {
    try {
      const body = {
        username: "test",
        password: "password",
      };
      console.log(body);
      const res = await axios.post(
        "http://172.20.10.2:5001/api/auth/login",
        body
      );

      console.log(res.data);
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>LoginScreen</Text>
      <TouchableOpacity
        onPress={fetchLogin}
        style={{
          height: 30,
          width: 80,
          backgroundColor: "white",
          alignItems: "center",
        }}
      >
        <Text>Try</Text>
      </TouchableOpacity>
      <Link href={"/(auth)/register"}>Don't have an account yet</Link>
    </View>
  );
};

export default LoginScreen;
