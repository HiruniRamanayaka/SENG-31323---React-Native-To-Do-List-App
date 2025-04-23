import React, {useEffect} from 'react'
import {ImageBackground, StyleSheet } from 'react-native' 

const IntroScreen = ({navigation}: any) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('Home')                      //Go to Home Screen after 2 seconds
        }, 5000);
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
