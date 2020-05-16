import React, { useState } from "react";

// UI
import {
  View,
  Text,
  TextInput,
  ScrollView,
  TouchableOpacity,
  Image,
} from "react-native";
import { Feather } from "@expo/vector-icons";

// Custom styles
import { basic, colors } from "../styles";

const Home = ({ navigation }) => {
  const [active, setActive] = useState(1);
  const showDetails = (item) => {
    navigation.navigate("Details", {...item});
  };
  const shopData = [
    {
      name: "Interiors",
      items: [],
    },
    {
      name: "Furniture",
      items: [
        {
          name: "Sample furniture",
          by: "Sample designer",
          rating: 4.2,
          price: "$1234",
          color: "Sample color",
          style: "Modern",
          made: "Somewhere",
          img: require("./../assets/img1.jpg"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt natus nam nemo at harum asperiores possimus laborum non.",
        },
        {
          name: "Tune Sofa",
          by: "Carl MH Barenbrug",
          rating: 4.5,
          price: "$1234",
          color: "Silver",
          style: "Modern",
          made: "Russia",
          img: require("./../assets/tune.jpg"),
          description:
            "Sound absorption is a key concept in room acoustics, which may not often be considered in furniture design.",
        },
        {
          name: "Sample furniture",
          by: "Sample designer",
          rating: 4.2,
          price: "$1234",
          color: "Sample color",
          style: "Modern",
          made: "Somewhere",
          img: require("./../assets/img2.jpg"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt natus nam nemo at harum asperiores possimus laborum non.",
        },
        {
          name: "Sample furniture",
          by: "Sample designer",
          rating: 4.2,
          price: "$1234",
          color: "Sample color",
          style: "Modern",
          made: "Somewhere",
          img: require("./../assets/img3.jpg"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt natus nam nemo at harum asperiores possimus laborum non.",
        },
        {
          name: "Sample furniture",
          by: "Sample designer",
          rating: 4.2,
          price: "$1234",
          color: "Sample color",
          style: "Modern",
          made: "Somewhere",
          img: require("./../assets/img4.jpg"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt natus nam nemo at harum asperiores possimus laborum non.",
        },
        {
          name: "Sample furniture",
          by: "Sample designer",
          rating: 4.2,
          price: "$1234",
          color: "Sample color",
          style: "Modern",
          made: "Somewhere",
          img: require("./../assets/img5.jpg"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt natus nam nemo at harum asperiores possimus laborum non.",
        },
        {
          name: "Sample furniture",
          by: "Sample designer",
          rating: 4.2,
          price: "$1234",
          color: "Sample color",
          style: "Modern",
          made: "Somewhere",
          img: require("./../assets/img6.jpg"),
          description:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus sunt natus nam nemo at harum asperiores possimus laborum non.",
        },
      ],
    },
    {
      name: "Moods",
      items: [],
    },
    {
      name: "Creators",
      items: [],
    },
    {
      name: "Home",
      items: [],
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
      <View style={basic.categoryView}>
        <ScrollView showsHorizontalScrollIndicator={false} horizontal={true}>
          {shopData.map((category, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={basic.category}
                onPress={() => setActive(index)}
              >
                <Text
                  style={[
                    basic.categoryText,
                    active === index && basic.activeCategory,
                  ]}
                >
                  {category.name}
                </Text>
                {active === index && <View style={basic.activeBorder} />}
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
      <ScrollView>
        <View style={basic.itemsView}>
          {shopData[active].items.map((item, index) => {
            return (
              <TouchableOpacity
                onPress={() => showDetails(item)}
                key={index}
                style={[basic.item, index % 2 === 1 && basic.drop]}
              >
                <Image style={basic.itemImage} source={item.img} />
                <Text style={basic.itemTitle}>{item.name}</Text>
                <Text style={basic.itemSub}>by {item.by}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
