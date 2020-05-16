import * as React from "react";

// UI
import { View, Text, Image } from "react-native";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { details, basic } from "../styles";
import { TouchableOpacity } from "react-native-gesture-handler";

const Details = ({ route }) => {
  const {
    img,
    name,
    by,
    rating,
    price,
    color,
    style,
    made,
    description,
  } = route.params;

  const properties = [
    { label: "fabric color", value: color },
    { label: "style", value: style },
    { label: "made in", value: made },
  ];

  const prepareStars = () => {
    let floorRate = Math.floor(rating);
    let stars = [];
    for (let i = 1; i <= 5; i++) {
      if (floorRate > 0 && i <= floorRate) {
        stars.push(<FontAwesome style={details.star} size={19} name="star" />);
      } else if (rating - floorRate >= 0.5) {
        stars.push(
          <FontAwesome style={details.star} size={19} name="star-half-empty" />
        );
      } else {
        stars.push(
          <FontAwesome style={details.star} size={19} name="star-o" />
        );
      }
    }
    return stars;
  };

  return (
    <View style={details.body}>
      <Image source={img} style={details.image} />
      <View style={details.detailsView}>
        <Image
          source={require("./../assets/overlay.png")}
          style={details.overlayCurve}
        />
        <View style={details.pad}>
          <View style={details.headView}>
            <View>
              <Text style={details.head}>{name}</Text>
              <Text style={[basic.itemSub, details.sub]}>by {by}</Text>
            </View>
            <Text style={details.price}>{price}</Text>
          </View>
          <View style={details.ratingView}>
            <Text style={details.rating}>{rating}</Text>
            {prepareStars().map((star) => {
              return star;
            })}
          </View>
          <View style={details.properties}>
            {properties.map((property) => {
              const { label, value } = property;
              return (
                <View style={details.propertyItem}>
                  <Text style={[basic.itemSub, details.sub, { fontSize: 16 }]}>
                    {label}
                  </Text>
                  <Text style={details.value}>{value}</Text>
                </View>
              );
            })}
          </View>
          <Text style={details.description}>{description}</Text>
          <View style={details.buttonView}>
            <TouchableOpacity style={details.pay}>
              <Text style={details.payText}>Pay</Text>
            </TouchableOpacity>
            <TouchableOpacity style={details.heart}>
              <Ionicons style={details.heartIcon} name="ios-heart-empty" size={24} color="black" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Details;
