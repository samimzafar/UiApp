import {Image, Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/AppColors';
import ScreenWrapper from '../../component/ScreenWrapper';
import Header from '../../component/CustomHeader';
import {width, height, totalSize} from 'react-native-dimension';
import {ImageConst} from '../../assets/images';
import ProgressBar from '../../component/ProgressBar';
import {TextComponent} from '../../component/TextComponent';
import {styles} from './styles';
import OptionSelector from '../../component/OptionSelector';
import {topicList} from '../../dummyData';
const Home = () => {
  return (
    <ScreenWrapper>
      <Header />
      <ProgressBar />
      <TextComponent />
      <View style={styles.horizentalLiner} />
      <OptionSelector options={topicList} />
    </ScreenWrapper>
  );
};

export default Home;
