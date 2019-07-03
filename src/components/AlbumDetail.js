import React from "react";
import { Text, View, Image, Linking } from "react-native";
import Card from "./Card";
import CardSection from "./CardSection";
import Button from "./Button";
// presentational components which just represents the jsx no logic
const AlbumDetail = props => {
  let { title, artist, thumbnail_image, image, url } = props.album;
  let {
    textContainer,
    thumbnailContainerStyle,
    thumbnailStyle,
    textStyle,
    imageStyle
  } = styles;

  return (
    <Card>
      {/* header with thumbnail image, title and album name */}
      <CardSection>
        <View style={thumbnailContainerStyle}>
          <Image source={{ uri: thumbnail_image }} style={thumbnailStyle} />
        </View>
        <View style={textContainer}>
          <Text style={textStyle}>{title}</Text>
          <Text>{artist}</Text>
        </View>
      </CardSection>

      {/* mid section wth ful lwidth image */}
      <CardSection>
        <Image source={{ uri: image }} style={imageStyle} />
      </CardSection>

      {/* bottom button section which redirects to amazon page of specific album */}
      <CardSection>
        <Button
          onPress={() => {
            Linking.openURL(url).catch(err =>
              console.error("An error occurred", err)
            );
          }}
        >
          Buy Now
        </Button>
      </CardSection>
    </Card>
  );
};

const styles = {
  textContainer: {
    flexDirection: "column",
    justifyContent: "space-around"
  },
  textStyle: {
    fontSize: 18
  },
  thumbnailStyle: {
    height: 50,
    width: 50
  },
  thumbnailContainerStyle: {
    justifyContent: "center",
    alignItems: "center",
    margin: 10
  },
  // full width image
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  }
};

export default AlbumDetail;
