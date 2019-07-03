import React, { Component } from "react";
import { View } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";
export default class App extends Component {
  render() {
    return (
      // flex 1 is added at the top component to avoid scroll flickering and made component spread over entire screen
      <View style={{ flex: 1 }}>
        <Header headerText={"Album Header"} />
        <AlbumList />
      </View>
    );
  }
}
