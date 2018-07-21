import React, { Component } from "react";
import { TextInput, StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
export default class Input extends Component {
  render() {
    const {
      textInputStyle,
    } = this.props;
    return (
      <TextInput
        style={[styles.textInput, textInputStyle]}
        {...this.props}
      />
    );
  }
}

const styles = StyleSheet.create({
  textInput: {
    width: "90%",
    alignSelf: "center",
    borderBottomColor: "#c4c3c3",
    borderBottomWidth: 1.5,
    color: "#242222",
    height: 40,
    fontSize: 15,
    fontWeight: "bold"
  }
});
