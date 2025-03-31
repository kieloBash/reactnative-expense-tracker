import { View, Text } from "react-native";
import React from "react";
import { colors } from "@/assets/ui/colors";
import { SafeAreaView } from "react-native-safe-area-context";

const Header = () => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.primary,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        paddingVertical: 10,
        paddingHorizontal: 20,
      }}
    >
      <View
        style={{
          flex: 1,
          // backgroundColor: "white",
          flexDirection: "row",
          gap: 6,
        }}
      >
        <View
          style={{
            backgroundColor: colors.primaryForeground,
            width: 50,
            height: 50,
            borderRadius: "100%",
          }}
        />
        <Text style={{ color: "black" }}>Hello</Text>
      </View>
    </SafeAreaView>
  );
};

export default Header;
