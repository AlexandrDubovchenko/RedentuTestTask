import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { Button, StyleSheet, Text, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import { setUser } from '../redux/auth/actionCreators'
import { appStateType } from '../redux/store'



export const Header = ({ navigation }: { navigation: NavigationProp<Record<string, object | undefined>>}) => {
  const dispatch = useDispatch()
  const user = useSelector((state: appStateType) => state.auth.user)
  return (
    <View style={styles.container}>
      <Text style={styles.text}>REDENTU TEST TASK</Text>
      <Button title={user ? "Logout" : "Login"} onPress={() => {
        if (user) {
          dispatch(setUser(null))
        } else {
          navigation.navigate('Profile', { screen: 'Login' })
        }
      }} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#4947ef',
    width: '100%',
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  text: {
    color: '#fff'
  },
  img: {
    width: 50,
    height: 50
  }
})
