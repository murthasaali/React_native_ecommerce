import React from 'react';
import { View, useWindowDimensions, Text, StyleSheet, ImageBackground } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Carousel from 'react-native-snap-carousel';

const HomeScreen = () => {
  const { width } = useWindowDimensions(); // Get the screen width

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
      <Carousel
         layout={'default'}
         data={data}
         renderItem={renderItem}
         sliderWidth={width}
         itemWidth={width - 10} // Adjust the item width as needed
         autoplay={true} // Enable auto-play
         autoplayInterval={3000} // Set the auto-play interval in milliseconds (adjust as needed)
         loop={true} // Enable loop
         autoplayDelay={500}
         inactiveSlideOpacity={0.7} // Opacity of inactive slides during transition
        inactiveSlideScale={0.9} 
      />
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
    paddingHorizontal: 4,
  },
  carouselItem: {
    flex: 0.2,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    borderRadius: 8,
    overflow: 'hidden',
  },
  carouselText: {
    color: 'white',
  },
});

export default HomeScreen;
