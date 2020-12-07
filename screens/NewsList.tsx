import React, { useEffect } from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from 'react-redux'
import { appStateType } from '../redux/store'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import { getNews } from '../redux/news/actionCreators'

export const NewsListScreen = () => {
  const dispatch = useDispatch()
  const navigation = useNavigation()
  const news = useSelector((state: appStateType) => state.news.news)
  useEffect(() => {
    dispatch(getNews())
  }, [])
  if (!news.length) {
    return <View></View>
  }
  return (
    <ScrollView style={styles.container}>
      {news.map(({ title, id }) => (
        <TouchableOpacity key={id} onPress={() => navigation.navigate("NewsItem", {id})} style={styles.news}>
          <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  news: {
    padding: 10,
    marginBottom: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "700"
  }
})
