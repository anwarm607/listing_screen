import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Home} from '../screens';
import {createStackNavigator} from '@react-navigation/stack';

const Stack = createStackNavigator();

function RootNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator headerMode="none">
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default RootNavigation;
