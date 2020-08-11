import React from 'react';
import RootNavigation from './navigation';
import {StatusBar, View} from 'react-native';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor="transparent"
        barStyle={'dark-content'}
        translucent
      />
      <RootNavigation />
    </View>
  );
};
export default App;
