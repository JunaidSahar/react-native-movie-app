import { Tabs } from "expo-router";
import { Image, Text, View } from "react-native";
import home from "@/assets/images/home.png";
import saved from "@/assets/images/saved.png";
import search from "@/assets/images/search.png";
import settings from "@/assets/images/settings.png";

const TabIcon = ({ focused, icon, text }: any) => {
  return (
    <View
      className={`w-full flex-row justify-center items-center overflow-hidden gap-2 p-3 rounded-full h-[44px] mt-5 min-w-[100px] ${
        focused ? "bg-[#212529]" : ""
      }`}
    >
      <Image
        source={icon}
        className="w-5 h-5"
        tintColor={focused ? "#f8f9fa" : ""}
      />
      {focused ? <Text className="text-[#f8f9fa]">{text}</Text> : null}
    </View>
  );
};

const _Layout = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarShowLabel: false,
        tabBarItemStyle: {
          height: "100%",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        },
        tabBarStyle: {
          backgroundColor: "#f8f9fa",
          marginHorizontal: 15,
          borderRadius: 50,
          marginBottom: 20,
          paddingHorizontal: 10,
          height: 55,
          position: "absolute",
          overflow: "hidden",
          borderColor: "#f8f9fa",
          borderWidth: 2,
        }
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={home} text={"Home"} />
          ),
        }}
      />
      <Tabs.Screen
        name="saved"
        options={{
          title: "Saved",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={saved} text={"Saved"} />
          ),
        }}
      />
      <Tabs.Screen
        name="search"
        options={{
          title: "Search",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={search} text={"Search"} />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          headerShown: false,
          tabBarIcon: ({ focused }) => (
            <TabIcon focused={focused} icon={settings} text={"Settings"} />
          ),
        }}
      />
    </Tabs>
  );
};

export default _Layout;
