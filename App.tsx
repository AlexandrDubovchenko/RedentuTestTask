import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { NewsListScreen } from './screens/NewsList';
import { ProfileScreen } from './screens/Profile';
import { NewsItemScreen } from './screens/NewsItem';
import { Header } from './components/Header';
import { createStackNavigator } from '@react-navigation/stack';
import { fetchNews, login } from './api';
import { Provider } from 'react-redux';
import store from './redux/store';
import { Login } from './screens/Login';

export type RootStackParamList = {
  News: {};
  Profile: {};
};
export type ProfileStackParamList = {
  Login: {};
  Profile: {};
};

export type NewsStackParamList = {
  NewsList: {},
  NewsItem: { id: number }
}

const Drawer = createDrawerNavigator<RootStackParamList>();
const StackNews = createStackNavigator<NewsStackParamList>()
const StackProfile = createStackNavigator<ProfileStackParamList>()

export default function App() {
  return (
    <>
      <Provider store={store}>
        <NavigationContainer>
          <Drawer.Navigator
            screenOptions={{
              headerShown: true,
              header: ({ scene: { descriptor: { navigation } } }) => <Header navigation={navigation} />
            }}
            initialRouteName="News">
            <Drawer.Screen name="News" component={() => (
              <StackNews.Navigator
                headerMode="none"
              >
                <StackNews.Screen name="NewsList" component={NewsListScreen} />
                <StackNews.Screen name="NewsItem" component={NewsItemScreen} />
              </StackNews.Navigator>
            )} />
            <Drawer.Screen name="Profile" component={() => (
              <StackProfile.Navigator
                headerMode="none"
              >
                <StackProfile.Screen name="Profile" component={ProfileScreen} />
                <StackProfile.Screen name="Login" component={Login} />
              </StackProfile.Navigator>
            )} />
          </Drawer.Navigator>
        </NavigationContainer>
      </Provider>
    </>
  );
}
