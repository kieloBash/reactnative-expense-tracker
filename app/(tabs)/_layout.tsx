import React from "react";
import { Tabs } from "expo-router";
import { HomeIcon, LucideIcon, SettingsIcon } from "lucide-react-native";
import { View } from "react-native";
import { colors } from "@/assets/ui/colors";
import { StatusBar } from "expo-status-bar";
import Header from "@/components/header";

const TabIcon = ({ focused, Icon }: { focused: boolean; Icon: LucideIcon }) => {
  return (
    <View
      style={{
        backgroundColor: focused ? colors.primary : colors.background,
        padding: 8,
        borderRadius: "100%",
      }}
    >
      <Icon
        color={focused ? colors.primaryForeground : colors.primary}
        size={24}
      />
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          header: () => <Header />,
          tabBarStyle: {
            backgroundColor: colors.background,
            position: "absolute",
            bottom: 40,
            alignSelf: "center",
            justifyContent: "center",
            paddingTop: 6,
            marginHorizontal: 135,
            borderRadius: 64,
            height: 50,

            shadowColor: "#000",
            shadowOffset: { width: 0, height: 1 },
            shadowOpacity: 0.1,
            shadowRadius: 3.5,
            elevation: 5,
          },
          // headerShown: false,
          tabBarShowLabel: false,
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} Icon={HomeIcon} />
            ),
          }}
        />
        <Tabs.Screen
          name="(settings)"
          options={{
            title: "Settings",
            tabBarIcon: ({ focused }) => (
              <TabIcon focused={focused} Icon={SettingsIcon} />
            ),
          }}
        />
      </Tabs>
      <StatusBar style="inverted" />
    </>
  );
};

export default TabsLayout;
