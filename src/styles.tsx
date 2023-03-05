import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  background: {
    backgroundColor: "#002d4c",
    height: "100%",
    width: "100%",
  },
  text_white: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  button_baseline: {
    justifyContent: "center",
    alignSelf: "center",
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    margin: 8,
    padding: 8,
    borderRadius: 16,
  },
  flex_row: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  flex_column: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
});

export default styles;
