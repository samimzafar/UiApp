import {Image, Text, View} from 'react-native';
import React, {useState} from 'react';
import {AppColors} from '../../utils/AppColors';
import ScreenWrapper from '../../component/ScreenWrapper';
import Header from '../../component/CustomHeader';
import {width, height, totalSize} from 'react-native-dimension';
import {ImageConst} from '../../assets/images';
import ProgressBar from '../../component/ProgressBar';
import {styles} from './styles';
import OptionSelector from '../../component/OptionSelector';
import {topicList} from '../../dummyData';
import CustomDropdown from '../../component/CustomDropDown';
import TextComponent from '../../component/TextComponent';
import SliderComponent from '../../component/Slider';
import CustomButton from '../../component/CustomButton';
import {Global_Const} from '../../utils/Const';
const Home = () => {
  const [selectedOption, setSelectedOption] = useState(Global_Const.FUN);
  return (
    <ScreenWrapper>
      <Header />
      <ProgressBar />
      <TextComponent />
      <View style={styles.horizentalLiner} />
      <OptionSelector
        options={topicList}
        selectedOption={selectedOption}
        setSelectedOption={setSelectedOption}
      />
      <CustomDropdown selectedTopic={selectedOption} />
      <SliderComponent />
      <CustomButton />
    </ScreenWrapper>
  );
};

export default Home;
