import * as React from "react";

// UI
import { View, Text } from "react-native";

// React Navigation
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// Screen
import Home from "../screens/Home";
import Details from "../screens/Details";


import { colors } from "../styles";

const Stack = createStackNavigator();

const Root = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            elevation: 0,
            borderBottomWidth: 0,
          },
          headerTitleStyle: {
            fontSize: 17,
            color: colors.alt,
          },
        }}
      >
        <Stack.Screen
          options={{
            title: "Explore",
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            title: "",
            headerStyle: {
                backgroundColor: 'red'
            },
            headerTransparent: true
          }}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
