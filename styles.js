import { StyleSheet } from "react-native";
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export const colors = {
  primary: "#fff",
  secondary: "#f0f0f0",
  alt: "#1A202C",
  placeholder: "#CBD5E0",
  black: "#0f0f0f",
  orange: "#ff8651",
};

export const basic = StyleSheet.create({
  body: {
    flex: 1,
    padding: 30,
    backgroundColor: colors.primary,
  },
  inputSection: {
    position: "relative",
    marginBottom: 25,
  },
  input: {
    backgroundColor: colors.secondary,
    height: 70,
    borderRadius: 20,
    paddingLeft: 70,
    fontSize: 17,
    color: colors.alt,
  },
  icon: {
    fontSize: 25,
    position: "absolute",
    top: 22.5,
    left: 22.5,
    color: colors.placeholder,
  },
  category: {
    paddingRight: 25,
    paddingVertical: 5,
  },
  categoryText: {
    color: colors.placeholder,
    fontWeight: "600",
  },
  activeCategory: {
    color: colors.alt,
    paddingBottom: 5,
  },
  activeBorder: {
    backgroundColor: colors.orange,
    height: 3,
    width: 28,
    marginRight: "auto",
    marginLeft: "auto",
    borderRadius: 20,
  },
  categoryView: {
    marginBottom: 20,
  },
  itemsView: {
    flexDirection: "row",
    flexWrap: "wrap",
    flex: 1,
    justifyContent: "space-between",
  },
  item: {
    width: (screenWidth - 85) / 2,
    height: 250,
  },
  itemImage: {
    width: (screenWidth - 85) / 2,
    height: 200,
    resizeMode: "cover",
    borderRadius: 20,
  },
  itemTitle: {
    fontWeight: "bold",
    fontSize: 17,
    paddingTop: 5,
  },
  itemSub: {
    fontSize: 12,
    color: colors.placeholder,
  },
  drop: {
    marginTop: 20,
  },
  info: {
    color: colors.placeholder,
    fontSize: 15,
    textAlign: "center",
  },
});

export const details = StyleSheet.create({
  body: {
    backgroundColor: colors.primary,
    flex: 1,
  },
  image: {
    width: screenWidth,
    height: screenHeight / 1.6,
    resizeMode: "cover",
  },
  detailsView: {
    padding: 30,
    backgroundColor: colors.primary,
    flex: 1,
    height: screenHeight / 1.9,
    width: screenWidth,
    resizeMode: "contain",
    position: "absolute",
    bottom: 0,
    right: 0,
    left: 0,
    borderTopLeftRadius: 95,
  },
  overlayCurve: {
    height: 100,
    width: 100,
    position: "absolute",
    resizeMode: "cover",
    top: -100,
    right: 0,
  },
  pad: {
    padding: 15,
  },
  headView: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  head: {
    fontSize: 35,
    fontWeight: "bold",
    color: colors.al,
  },
  sub: {
    fontSize: 17,
  },
  price: {
    fontSize: 19,
    color: colors.orange,
    fontWeight: "bold",
  },
  rating: {
    paddingVertical: 10,
    fontSize: 13,
    paddingRight: 5,
  },
  ratingView: {
    flexDirection: "row",
    alignItems: "center",
  },
  star: {
    margin: 2,
    color: colors.orange,
  },
  properties: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  description: {
    fontSize: 13,
    paddingVertical: 10,
  },
  buttonView: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 25,
  },
  pay: {
    backgroundColor: colors.alt,
    width: (screenWidth - 90) * 0.68,
    padding: 25,
    borderRadius: 25,
    height: 75,
  },
  payText: {
    color: colors.primary,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 15,
  },
  heart: {
    backgroundColor: colors.secondary,
    width: (screenWidth - 90) * 0.28,
    padding: 25,
    borderRadius: 25,
    height: 75,
  },
  heartIcon: {
    color: colors.placeholder,
    textAlign: "center",
    fontSize: 28,
  },
  heartActive: {
    color: colors.orange,
  },
});
