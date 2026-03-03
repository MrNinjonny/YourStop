import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react"; //check if this is needed
import { Text, View } from "react-native";

type TabIconProps = {
  name: keyof typeof Ionicons.glyphMap;
  color: string;
  focused: boolean;
  label: string;
};

function TabIcon({ name, color, focused, label }: TabIconProps) {
  return (
    <View className="items-center justify-center pt-1">
      <Ionicons name={name} size={24} color={color} />
      <Text
        style={{
          color,
          fontSize: 10,
          marginTop: 2,
          fontWeight: focused ? "700" : "400",
        }}
      >
        {label}
      </Text>
    </View>
  );
}

const _layout = () => {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false, // We render our own label in TabIcon
        tabBarStyle: {
          backgroundColor: "#0f0f1a",
          borderTopColor: "#2a2a4a",
          borderTopWidth: 1,
          height: 90,
          paddingBottom: 8,
        },
        tabBarActiveTintColor: "#6C63FF",
        tabBarInactiveTintColor: "#555577",
      }}
    >
      <Tabs.Screen
        name="index"
        //options={{ title: "Home", headerShown: false }}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon name="home" color={color} focused={focused} label="Home" />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        //options={{ title: "Favourites", headerShown: false }}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="star"
              color={color}
              focused={focused}
              label="Favourites"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="history"
        //options={{ title: "History", headerShown: false }}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="time"
              color={color}
              focused={focused}
              label="History"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        //options={{ title: "Settings", headerShown: false }}
        options={{
          tabBarIcon: ({ color, focused }) => (
            <TabIcon
              name="settings"
              color={color}
              focused={focused}
              label="Settings"
            />
          ),
        }}
      />
    </Tabs>
  );
};

export default _layout;
