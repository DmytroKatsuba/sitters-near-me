import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SitterDetails, Sitters } from "../screens";
import { TRootStack, ERootStack } from "./config";
import { ReactElement } from "react";

type TDefaultNavigationElement = () => JSX.Element;

const Stack = createNativeStackNavigator<TRootStack>();

export const RootNavigator: TDefaultNavigationElement = () => (
  <NavigationContainer>
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={ERootStack.Sitters} component={Sitters} />
      <Stack.Screen name={ERootStack.SitterDetails} component={SitterDetails} />
    </Stack.Navigator>
  </NavigationContainer>
);
