import React from 'react';
import { View, useWindowDimensions, Text, StyleSheet, ImageBackground, TextInput } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/FontAwesome';
import SketchfabEmbed from './Details';

const HomeScreen = () => {
  const { width, height } = useWindowDimensions(); // Get the screen width

  const data = [
    { id: '1', text: 'Item 1', bgImage: require('../assets/1.png') },
    { id: '2', text: 'Item 2', bgImage: require('../assets/2b.png') },
    { id: '3', text: 'Item 3', bgImage: require('../assets/2b.png') },
    { id: '4', text: 'Item 4', bgImage: require('../assets/2b.png') },
    // Add more items as needed
  ];

  const renderItem = ({ item }) => (
    <ImageBackground source={item.bgImage} style={styles.carouselItem} borderRadius={8}>
      <Text style={styles.carouselText}>{item.text}</Text>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <StatusBar
        style='light'
        translucent={false}
        backgroundColor="black"
      />
      <View style={{ flex: 0.06, width: "100%", borderRadius: 25, overflow: 'hidden', alignItems: 'center', flexDirection: "row", justifyContent: 'space-between', backgroundColor: "black", paddingHorizontal: 10 }}>
        <Icon name="map-marker" size={30} color="white" />
        <Text style={styles.carouselText}>malappuram</Text>
        <TextInput placeholder='Search' clearButtonMode='always' style={{ backgroundColor: "white", width: "70%", padding: 4, borderRadius: 15,opacity:0.5 }} />
      </View>
      <View style={{ flex: 0.2, width: "100%", borderRadius: 10, overflow: 'hidden', alignItems: 'flex-start', justifyContent: 'flex-start', }}>
        <Carousel
          layout={'default'}
          data={data}
          renderItem={renderItem}
          sliderWidth={width}
          itemWidth={width - 30} // Adjust the item width as needed
          autoplay={true} 
          // Enable auto-play
          autoplayInterval={3000} // Set the auto-play interval in milliseconds (adjust as needed)
          loop={true} // Enable loop
          autoplayDelay={500}
          inactiveSlideOpacity={0.7} // Opacity of inactive slides during transition
          inactiveSlideScale={0.9}
        />
      </View>

      <View style={{ flex: 0.8, width: "100%", borderRadius: 25,backgroundColor:"white", alignItems: 'flex-start', justifyContent: 'flex-start', opacity:0.2}}>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    color: 'white',
    backgroundColor: 'black',
    gap: 5,
    paddingHorizontal: 10
  },
  carouselItem: {
    flex: 0.9,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 10,
    overflow: 'hidden',
    opacity: 0.8,
  },
  carouselText: {
    color: 'white',
  },
});

export default HomeScreen;
