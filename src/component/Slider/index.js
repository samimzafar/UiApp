import React, {useState, useRef} from 'react';
import {View, StyleSheet, PanResponder, Animated, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

export const SliderComponent = ({navigation}) => {
  const [sliderValue, setSliderValue] = useState(100);
  // const circlePosition = useRef(new Animated.Value(0)).current; // Initial position set to 0
  const circlePosition = useRef(
    new Animated.Value(((sliderValue - 100) / 900) * 300),
  ).current; // Adjusted initial position

  // PanResponder for handling touch events
  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gesture) => {
      let newValue = sliderValue + (gesture.dx * 900) / 300;
      newValue = Math.max(100, Math.min(newValue, 1000));
      setSliderValue(newValue);
      circlePosition.setValue(((newValue - 100) / 900) * 300);
    },
  });

  // Animated styles for the active slider line
  const animatedSliderStyle = {
    width: circlePosition.interpolate({
      inputRange: [0, 300],
      outputRange: ['0%', '100%'], // Width will animate from 0% to 100%
    }),
  };

  return (
    <View style={styles.container}>
      <View style={styles.sliderLineContainer}>
        <Animated.View style={[styles.activeSliderLine, animatedSliderStyle]}>
          <LinearGradient
            colors={['rgba(82, 63, 215, 1)', 'rgba(255, 125, 255, 1)']}
            start={{x: 0.0, y: 0.5}}
            end={{x: 1.0, y: 0.5}}
            style={StyleSheet.absoluteFill} // Fill the animated container
          />
        </Animated.View>
        <View style={styles.inactiveSliderLine} />
      </View>
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          styles.circleContainer,
          {
            transform: [{translateX: circlePosition}],
          },
        ]}>
        <View style={styles.circle}>
          <Text style={styles.circleText}>{Math.round(sliderValue)}</Text>
        </View>
      </Animated.View>
      <View style={styles.labels}>
        <Text style={styles.label}>100</Text>
        <Text style={styles.label}>1000</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
    padding: 20, // Padding for the container
  },
  sliderLineContainer: {
    flexDirection: 'row',
    width: 300,
    height: 20, // Height of the slider line
    borderRadius: 10, // Round the corners
    backgroundColor: 'rgba(58, 57, 64, 1)', // Background color for the inactive part
    overflow: 'hidden', // Ensures the inner elements don't overflow
  },
  activeSliderLine: {
    height: '100%',
    // Other styles for the active part of the slider
  },
  inactiveSliderLine: {
    flex: 1,
    backgroundColor: 'rgba(58, 57, 64, 1)',
    // Other styles for the inactive part of the slider
  },
  circleContainer: {
    position: 'absolute',
    left: 30,
  },
  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 125, 255, 1)', // Circle color
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#fff', // Optional: border color
  },
  circleText: {
    color: '#fff',
    fontSize: 16,
  },
  labels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: 300,
    marginTop: 10, // Space between the slider and labels
  },
  label: {
    color: '#fff', // Label color
  },
});
