import * as React from "react";

// UI
import { View, Text, TextInput, ScrollView } from "react-native";
import { Feather} from "@expo/vector-icons";

// Custom styles
import { basic, colors } from "../styles";

const Home = () => {
  return (
    <View style={basic.body}>
      <View style={basic.inputSection}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={colors.placeholder}
          style={basic.input}
        />
        <Feather name="search" style={basic.icon} />
      </View>
      <ScrollView style={basic.inputSection}>
        <TextInput
          placeholder="Search..."
          placeholderTextColor={colors.placeholder}
          style={basic.input}
        />
        <Feather name="search" style={basic.icon} />
      </ScrollView>

    </View>
  );
};

export default Home;
