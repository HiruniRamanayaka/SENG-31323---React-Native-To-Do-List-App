import React from 'react'
import {StyleSheet, SafeAreaView, Text, ScrollView} from 'react-native'
import TaskInput from '../components/TaskInput'
import { COLORS } from '../constants/Theme';
import TaskList from '../components/TaskList';
import styles from '../styles/screenStyles/HomeScreen.style'

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
