import React, { Component } from "react";
import { View, Text, StyleSheet, Platform } from "react-native";

export default class StatusBarBackground extends Component {
  render() {
    return <View style={[styles.statusBarBackground]}></View>;
  }
}

const styles = StyleSheet.create({
  statusBarBackground: {
    height: Platform.OS === "ios" ? 18 : 0, //this is just to test if the platform is iOS to give it a height of 18, else, no height (Android apps have their own status bar)
    backgroundColor: "white",
  },
});
