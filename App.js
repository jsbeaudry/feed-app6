import React from "react";
import { View, Text, Platform } from "react-native";
import { createStackNavigator, createAppContainer } from "react-navigation";

import App6 from "./app6/home";

import { Ionicons } from "@expo/vector-icons";

const A6 = createStackNavigator({
  home: {
    screen: App6,
    navigationOptions: ({ navigation }) => ({
      title: "",
      header: null,
      gesturesEnabled: false
    })
  }
});

export default createAppContainer(A6);
