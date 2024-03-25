import React from 'react';
import {Text, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import MaskedView from '@react-native-masked-view/masked-view';

const GradientText = props => {
  return (
    <MaskedView maskElement={<Text {...props} />}>
      <LinearGradient
        colors={['rgba(82, 63, 215, 1)', 'rgba(255, 125, 255, 1)']}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}>
        <Text {...props} style={[props.style, {opacity: 0}]} />
      </LinearGradient>
    </MaskedView>
  );
};

export const GradientTextComponet = () => {
  return (
    <GradientText
      style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}>
      Your Gradient Text
    </GradientText>
  );
};
