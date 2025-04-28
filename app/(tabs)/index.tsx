import { Image, Text, View, SafeAreaView, ImageBackground } from "react-native";
import { StatusBar as ExpoStatusBar } from 'expo-status-bar';
import { LinearGradient } from 'expo-linear-gradient';
import background from "@/assets/images/background.jpg";
import logo from "@/assets/images/logo-1.png";

export default function Index() {
  return (
    <>
      <ExpoStatusBar style="light" translucent />
      <View className="justify-start">
        <ImageBackground source={background} className="h-4/5" resizeMode="cover">
            <View className="py-16 px-5 h-full bg-black/70">
              <Image source={logo} className="w-20 h-20" resizeMode="contain" />
              <View className="flex-1 justify-center">
                <Text className="text-white text-4xl font-bold mt-5">Superman 2025</Text>
                <Text className="text-white text-3xl font-bold">My App</Text>
              </View>
            </View>
        </ImageBackground>
      </View>
    </>
  );
}
