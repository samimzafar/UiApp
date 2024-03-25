import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {styles} from './style';

const OptionSelector = ({options, selectedOption, setSelectedOption}) => {
  const handleSelect = option => {
    setSelectedOption(option);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.question}>
        What type of content are you creating?
      </Text>
      <View style={styles.optionsContainer}>
        {options.map((option, index) => (
          <TouchableOpacity
            key={index}
            style={[
              styles.option,
              selectedOption === option && styles.selectedOption,
            ]}
            onPress={() => handleSelect(option)}>
            <Text style={styles.optionText}>{option}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default OptionSelector;
