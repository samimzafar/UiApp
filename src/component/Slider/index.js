import React, {useState, useRef} from 'react';
import {View, StyleSheet, PanResponder, Animated, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {AppColors} from '../../utils/AppColors';
import {height, width, totalSize} from 'react-native-dimension';
import FontFamily from '../../utils/FontFamily';
const SliderComponent = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(100);
  const circlePosition = useRef(
    new Animated.Value(((sliderValue - 100) / 900) * 300),
  ).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      let newValue = sliderValue + (gesture.dx * 900) / 300;
      newValue = Math.max(100, Math.min(newValue, 1000));
      setSliderValue(newValue);
      circlePosition.setValue(((newValue - 100) / 900) * 300);
    },
  });

  const animatedSliderStyle = {
    width: circlePosition.interpolate({
      inputRange: [0, 280],
      outputRange: ['0%', '100%'],
    }),
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Set the number of words for output text.
      </Text>
      <View
        style={{
          backgroundColor: AppColors.darkBlack,
          paddingHorizontal: width(4),
          paddingVertical: height(1.6),
          borderRadius: totalSize(1.5),
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            color: AppColors.white,
            fontFamily: FontFamily.PoppinsBold,
            fontSize: totalSize(1.4),
          }}>
          100
        </Text>
        <View style={styles.sliderLineContainer}>
          <Animated.View style={[styles.activeSliderLine, animatedSliderStyle]}>
            <LinearGradient
              colors={AppColors.bluePinkPurpleGradient}
              start={{x: 0.0, y: 0.5}}
              end={{x: 1.0, y: 0.5}}
              style={StyleSheet.absoluteFill}
            />
          </Animated.View>
          <View style={styles.inactiveSliderLine} />
        </View>
        <Text
          style={{
            color: AppColors.white,
            fontFamily: FontFamily.PoppinsBold,
            fontSize: totalSize(1.4),
          }}>
          1000
        </Text>

        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.circleContainer,
            {
              transform: [{translateX: circlePosition}],
            },
          ]}>
          <View
            style={{
              paddingVertical: height(0.5),
              borderRadius: totalSize(2),
              width: width(13),
              overflow: 'hidden',
              alignItems: 'center',
              justifyContent: 'center',
              backgroundColor: AppColors.bluePurple,
              position: 'absolute',
              bottom: height(5),
            }}>
            <Text style={styles.circleText}>{Math.round(sliderValue)}</Text>
          </View>
          <View style={styles.circle}></View>
        </Animated.View>
      </View>
    </View>
  );
};
export default SliderComponent;
