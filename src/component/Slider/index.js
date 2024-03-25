import React, {useState, useRef} from 'react';
import {View, StyleSheet, PanResponder, Animated, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';
import {AppColors} from '../../utils/AppColors';
import {width, totalSize} from 'react-native-dimension';

const SliderComponent = () => {
  const [sliderValue, setSliderValue] = useState(100);
  const circlePosition = useRef(new Animated.Value(0)).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      let newValue = sliderValue + (gesture.dx * 900) / 300;
      newValue = Math.max(100, Math.min(newValue, 1000));
      setSliderValue(newValue);
      const newPosition = ((newValue - 100) / 900) * (width(62) - totalSize(2));
      circlePosition.setValue(newPosition);
    },
  });

  const animatedSliderStyle = {
    width: circlePosition.interpolate({
      inputRange: [0, width(62) - totalSize(2)],
      outputRange: ['0%', '100%'],
    }),
  };

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
