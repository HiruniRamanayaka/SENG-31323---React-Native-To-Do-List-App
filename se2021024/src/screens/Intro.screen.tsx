import React, {useEffect, useRef} from 'react'
import {Animated, ImageBackground, StyleSheet } from 'react-native' 

const IntroScreen = ({navigation}: any) => {
  const fadeAnim = useRef(new Animated.Value(1)).current; // Start fully visible

    useEffect(() => {
      const timer = setTimeout(() => {
        // Fade out the screen
        Animated.timing(fadeAnim, {
          toValue: 0,
          duration: 1000, // Smooth fade duration
          useNativeDriver: true,
        }).start(() => {
          navigation.replace('Home'); // Navigate after fade-out
        });
      }, 4200); // Start fading just before 5s mark

      return () => clearTimeout(timer);                        // Cancel the timer if screen is closed early
    }, [])

  return (
    <ImageBackground
      source={require('../assets/opening-img.png')}
      style={styles.background}
      resizeMode="cover"
    />
  )
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
});

export default IntroScreen
