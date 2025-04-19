import React from 'react'
import {StyleSheet, SafeAreaView, Text} from 'react-native'
import TaskInput from '../components/TaskInput'
import { COLORS } from '../constants/Theme';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <TaskInput />
      <TaskList />
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background, // this makes the whole screen black
    padding: 16,
  },
});