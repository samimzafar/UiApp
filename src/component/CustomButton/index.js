import React from 'react';
import {Text, View} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';
import {AppColors} from '../../utils/AppColors';
import ArrowSvg from '../../assets/svg/colored-right-arrow.svg';
import {styles} from './styles';
const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={AppColors.bluePurpleDarkGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

const CustomButton = () => {
  return (
    <View style={styles.btnTextContainer}>
      <GradientText style={styles.btnTextStyle}>Next</GradientText>
      <ArrowSvg />
    </View>
  );
};

export default CustomButton;
