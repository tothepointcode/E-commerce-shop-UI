import * as React from "react";

// UI
import { View, Text, Image, ImageBackground } from "react-native";
import { details } from "../styles";

const Details = ({ route }) => {
  const { img } = route.params;
  return (
    <View style={details.body}>
      <Image source={img} style={details.image} />
      <View style={details.detailsView}>
        <Image
          source={require("./../assets/overlay.png")}
          style={details.overlayCurve}
        />
        <Text>All details here</Text>
      </View>
    </View>
  );
};

export default Details;
