import React from 'react';
import {View, Text, StyleSheet, Animated} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {AppColors} from '../../utils/AppColors';
import useSlider from '../../hooks/useSlider';

const SliderComponent = () => {
  const {sliderValue, panResponder, animatedSliderStyle, circlePosition} =
    useSlider();

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        Set the number of words for output text.
      </Text>
      <View style={styles.sliderLineVew}>
        <Text style={styles.sliderPointStyle}>100</Text>
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
        <Text style={styles.sliderPointStyle}>1000</Text>
        <Animated.View
          {...panResponder.panHandlers}
          style={[
            styles.circleContainer,
            {
              transform: [{translateX: circlePosition}],
            },
          ]}>
          <View style={styles.sliderValueInCircleStyle}>
            <Text style={styles.sliderTextValueStyle}>
              {Math.round(sliderValue)}
            </Text>
          </View>
          <View style={styles.circleOuterView}>
            <View style={styles.circle} />
          </View>
        </Animated.View>
      </View>
    </View>
  );
};

export default SliderComponent;
