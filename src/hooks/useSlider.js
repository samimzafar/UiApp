import {useState, useRef} from 'react';
import {PanResponder, Animated} from 'react-native';
import {width, totalSize} from 'react-native-dimension';

const useSlider = (initialValue = 100) => {
  const [sliderValue, setSliderValue] = useState(initialValue);
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

  return {
    sliderValue,
    panResponder,
    animatedSliderStyle,
    circlePosition,
  };
};

export default useSlider;
