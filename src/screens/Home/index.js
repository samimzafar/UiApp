import {View} from 'react-native';
import React, {useState} from 'react';
import ScreenWrapper from '../../component/ScreenWrapper';
import Header from '../../component/CustomHeader';
import ProgressBar from '../../component/ProgressBar';
import {styles} from './styles';
import OptionSelector from '../../component/OptionSelector';
import {topicList} from '../../dummyData';
import CustomDropdown from '../../component/CustomDropDown';
import TextComponent from '../../component/TextComponent';
import SliderComponent from '../../component/Slider';
import CustomButton from '../../component/CustomButton';
import {Global_Const} from '../../utils/Const';
import {height, width} from 'react-native-dimension';
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
      <View style={styles.heightSpacer(12)} />
      <SliderComponent />
      <CustomButton />
    </ScreenWrapper>
  );
};

export default Home;
