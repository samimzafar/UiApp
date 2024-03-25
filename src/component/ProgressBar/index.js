import {Image} from 'react-native';
import React from 'react';
import {ImageConst} from '../../assets/images';
import {styles} from './style';

const ProgressBar = () => {
  return (
    <Image
      source={ImageConst.progressBar}
      resizeMode="contain"
      style={styles.container}
    />
  );
};

export default ProgressBar;
