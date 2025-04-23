import React from 'react'
import {StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native'
import TaskInput from '../components/TaskInput'
import { COLORS } from '../constants/Theme';
import TaskList from '../components/TaskList';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <ScrollView>
        <TaskInput />
        <TaskList />
      </ScrollView>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: COLORS.background, 
    padding: 16,
  },
});