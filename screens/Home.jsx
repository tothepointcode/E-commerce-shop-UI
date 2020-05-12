import React, {useState} from "react";

// UI
import { View, Text, TextInput, ScrollView } from "react-native";
import { Feather } from "@expo/vector-icons";

// Custom styles
import { basic, colors } from "../styles";
import Categories from "./Categories";
import { TouchableOpacity } from "react-native-gesture-handler";

const Home = () => {
    const [active, setActive] = useState(1);
  const categories = [
    {
      name: "Interiors",
    },
    {
      name: "Furniture",
    },
    {
      name: "Moods",
    },
    {
      name: "Creators",
    },
    {
      name: "Home",
    },
  ];
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
      <ScrollView horizontal={true} style={basic.inputSection}>
        {categories.map((category, index) => {
          return (
            <TouchableOpacity style={basic.category} onPress={()=> setActive(index)}>
              <Text style={[basic.categoryText, (active === index) && basic.activeCategory]}>{category.name}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default Home;
