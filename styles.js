import { StyleSheet } from "react-native";

export const colors = {
  primary: "#fff",
  secondary: "#f0f0f0",
  alt: "#1A202C",
  placeholder: "#CBD5E0",
  black: "#0f0f0f",
  orange: "#ff8651"
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
    marginLeft: 'auto',
    borderRadius: 20,
  },
});
