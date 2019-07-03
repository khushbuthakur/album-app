import React, { Component } from "react";
import { View, ScrollView } from "react-native";
let counter = 0;
import AlbumDetail from "./AlbumDetail";
export default class AlbumList extends Component {
  state = {
    albums: []
  };

  // componentWillMount = async () => {
  //   console.log("in componentWillMount");
  // };

  componentDidMount = () => {
    console.log("in componentDidMount");
    this.fetchAlbums();
  };

  fetchAlbums = () => {
    try {
      console.log("in fetchAlbums");
      fetch("https://rallycoding.herokuapp.com/api/music_albums")
        .then(response => response.json())
        .then(responseData => {
          console.log(responseData);
          this.setState({ albums: responseData });
        });
    } catch (err) {
      console.log("error ", err);
    }
  };

  renderAlbums = () => {
    let { albums } = this.state;
    return albums.map(item => {
      counter++;
      // return <Text key={counter}>{item.title}</Text>;
      return <AlbumDetail key={counter} album={item} />;
    });
  };

  render() {
    return (
      // everything in scrollview is scrollable
      <ScrollView>{this.renderAlbums()}</ScrollView>
    );
  }
}
