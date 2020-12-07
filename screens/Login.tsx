import { useNavigation } from '@react-navigation/native'
import { StackNavigationProp } from '@react-navigation/stack'
import React, { useState } from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { useDispatch, useSelector } from 'react-redux'
import { ProfileStackParamList } from '../App'
import { getUser } from '../redux/auth/actionCreators'
import { appStateType } from '../redux/store'
import { ProfileScreen } from './Profile'

export const Login = () => {
  const navigation = useNavigation()
  const dispatch = useDispatch()
  const user = useSelector((state: appStateType) => state.auth.user)
  const error = useSelector((state: appStateType) => state.auth.error)
  const [login, setLogin] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const submit = () => {
    if (login && password) {
      dispatch(getUser({ login, password }))
    }
  }
  if (user) {
    navigation.navigate('Profile')
  }
  return (
    <View style={styles.container}>
      <TextInput placeholder="Login" style={styles.input} onChangeText={text => setLogin(text)} value={login} />
      <TextInput placeholder="Password" style={styles.input} value={password} onChangeText={text => setPassword(text)} />
      <Button title="Login" onPress={submit} />
      {error && <Text style={styles.error}>{error}</Text>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10
  },
  input: {
    borderColor: "#4947ef",
    borderWidth: 1,
    marginBottom: 15,
    padding: 10
  },
  error: {
    color: 'red',
    padding: 10
  }
})
