import React from 'react';
import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Provider } from 'react-redux';
import Navbar from './components/navbar'
import MainScreen  from './screens/main-screen/'
import DetailsScreen from './screens/detail-screen'
import store from './store';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
          <Navbar title="Self Budget" />
          <Stack.Navigator initialRouteName="Home"
                            screenOptions={{
                              headerShown: false
                            }}>
            <Stack.Screen name="Home" component={MainScreen} />
            <Stack.Screen name="Details" component={DetailsScreen} />
          </Stack.Navigator>  
      </Provider>
    </NavigationContainer>
  );
};
