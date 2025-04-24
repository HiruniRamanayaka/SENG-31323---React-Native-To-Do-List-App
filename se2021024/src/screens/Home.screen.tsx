import React from 'react'
import {SafeAreaView, ScrollView} from 'react-native'
import TaskInput from '../components/TaskInput'
import TaskList from '../components/TaskList';
import styles from '../styles/screenStyles/HomeScreen.style';
import { PaperProvider } from 'react-native-paper';

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.screen}>
      <PaperProvider>
      <ScrollView>
        <TaskInput />
        <TaskList />
      </ScrollView>
      </PaperProvider>
    </SafeAreaView>
  )
}

export default HomeScreen
