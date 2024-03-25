import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {styles} from './styles';
import AntDesign from 'react-native-vector-icons/AntDesign';
import AvatarSvg from '../../assets/svg/avatar.svg';
import {AppColors} from '../../utils/AppColors';
const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.headerLeftSideView}>
        <AntDesign name="left" size={18} color={AppColors.white} />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.headerLabel}>Media management</Text>
        <Text style={styles.headerSubLabel}>Draft campaign</Text>
      </View>
      <AvatarSvg style={styles.avatar} />
    </View>
  );
};

export default Header;
