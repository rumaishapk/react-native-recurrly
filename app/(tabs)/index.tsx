import "@/global.css";
import { Link } from "expo-router";
import { Pressable, Text } from "react-native";

import { styled } from "nativewind";
import { SafeAreaView as RnSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RnSafeAreaView);

export default function Home() {
  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <Text className="text-7xl font-sans-extrabold">Home</Text>

      <Link href="/onboarding" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="font-sans-bold  text-white">Go to Onboarding</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-in" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="font-sans-bold text-white">Go to Sign in</Text>
        </Pressable>
      </Link>

      <Link href="/(auth)/sign-up" asChild>
        <Pressable className="mt-4 rounded bg-primary p-4">
          <Text className="font-sans-bold text-white">Go to Sign Up</Text>
        </Pressable>
      </Link>
    </SafeAreaView>
  );
}
