# album-app
This is a react native app. 
It fetches an array of albums and sets it in scroll view. 
Modules covered in this app are Flexbox, ScrollView, Fetch API, Linking, TouchableOpacity, state and props

Two important styles learned in this app are:

1) Full width Image style : 
 <Image source={{ uri: image }} style={imageStyle} />
 
 // full width image
  imageStyle: {
    height: 300,
    flex: 1,
    width: null
  } 


2) Full width button style:

<TouchableOpacity onPress={onPress} style={buttonStyle}>
      <Text style={textStyle}>{children}</Text>
</TouchableOpacity>
    
    //   full width button
  buttonStyle: {
    flex: 1, // expand and fill the content as much as it can
    alignSelf: "stretch", // position itself using flexbox rules, stretch to fill limits of container
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  }
