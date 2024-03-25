import {Text, View} from 'react-native';
import React from 'react';
import {AppColors} from '../../utils/AppColors';
import ScreenWrapper from '../../component/ScreenWrapper';
import Header from '../../component/CustomHeader';

const Home = () => {
  return (
    <ScreenWrapper>
      <Header />
      {/* <Text style={{color: 'white'}}>Home</Text> */}
    </ScreenWrapper>
  );
};

export default Home;
