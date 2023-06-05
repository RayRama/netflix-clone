import { View, Text } from "react-native";
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppStack from "./AppStack";
import { useAtom } from "jotai";
import { isLoadingAtom } from "@store/";
import Loading from "@molecules/Loading";

export default function Navigator() {
  const [isLoading] = useAtom(isLoadingAtom);
  return (
    <NavigationContainer>
      {isLoading ? <Loading /> : <AppStack />}
    </NavigationContainer>
  );
}
