import * as React from "react";

// UI
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

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
          headerBackImage: ({ tintColor }) => (
            <Ionicons name="ios-arrow-back" size={27} color={tintColor} />
          ),
          headerRight: ({ tintColor }) => (
            <MaterialIcons name="apps" size={23} color={tintColor} />
          ),

          headerLeftContainerStyle: {
            paddingLeft: 30,
          },
          headerRightContainerStyle: {
            paddingRight: 30,
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
              backgroundColor: "red",
            },
            headerTransparent: true,
            headerTintColor: colors.primary,
          }}
          name="Details"
          component={Details}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Root;
