import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import Icon from 'react-native-vector-icons/AntDesign';
export const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Icon name="stepforward" size={30} color="white" />
    </View>
  );
};
