import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useSelector } from 'react-redux'
import { appStateType } from '../redux/store'
import { useNavigation } from '@react-navigation/native'

export const ProfileScreen = () => {
  const navigation = useNavigation()
  const user = useSelector((state: appStateType) => state.auth.user)

  if (!user) {
    navigation.navigate('Login')
  }
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile</Text>
      <View style={styles.infoContainer}>
        <Text style={styles.info}>ID: {user?.id}</Text>
        <Text style={styles.info}>Login: {user?.login}</Text>
        <Text style={styles.info}>Name: {user?.name}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  title: {
    fontWeight: "700",
    fontSize: 15,
  },
  infoContainer: {
    marginTop: 20
  },
  info: {
    marginBottom: 7,
  }
})
