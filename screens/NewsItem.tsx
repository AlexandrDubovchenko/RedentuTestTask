import React from 'react'
import { NewsStackParamList } from '../App'
import { StyleSheet, Text } from 'react-native'
import { RouteProp, useRoute } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { appStateType } from '../redux/store'
import { ScrollView } from 'react-native-gesture-handler'


export const NewsItemScreen = () => {
  const route = useRoute<RouteProp<NewsStackParamList, 'NewsItem'>>()
  const news = useSelector((state: appStateType) => state.news.news.find((item) => item.id === route.params.id))
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>{news!.title}</Text>
      <Text>{news!.text}</Text>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
    marginBottom: 10
  },
  button: {
    width: 50,
    backgroundColor: 'red',
    borderRadius: 20,
    padding: 4,
  },
})
