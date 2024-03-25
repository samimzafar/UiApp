import {SafeAreaView, StatusBar, View} from 'react-native';
import React from 'react';
import {styles} from './styles';
const ScreenWrapper = ({children}) => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar hidden />
      <View style={styles.childrenContainer}>{children}</View>
    </SafeAreaView>
  );
};

export default ScreenWrapper;
