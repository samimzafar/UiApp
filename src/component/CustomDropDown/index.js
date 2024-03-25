import React, {useState, useRef} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatListIndicator} from '@fanchenbao/react-native-scroll-indicator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppColors} from '../../utils/AppColors';
import {styles} from './styles';

const data = [
  'Board games revival',
  'Comedy trends',
  'Amusement parks',
  'Escape rooms',
  'Street performances',
  'Online challenges',
  'Festivals impact',
  'Crafting movement',
  'Social gaming',
  'Virtual reality',
  'Gamified learning',
  'Education systems',
  'Bilingual benefits',
];

export default function CustomDropdown({listindData, selectedTitle}) {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  const handleSearch = text => {
    setSearchText(text);
    setSelectedItem('');
    const filtered = data.filter(item =>
      item.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(filtered);
  };

  const handleItemPress = item => {
    setSearchText(item);
    setSelectedItem(item);
  };

  const toggleDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  const clearSelection = () => {
    setSearchText('');
    setSelectedItem('');
    setFilteredData(data);
  };

  return (
    <View>
      <Text style={styles.question}>
        Which type of “Education“content are you creating?
      </Text>
      <LinearGradient
        colors={AppColors.bluePinkPurpleGradient}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={styles.lineaGradientStyle}>
        <TouchableOpacity onPress={toggleDropdown}>
          <View style={styles.textInputView}>
            <TextInput
              placeholder="Search"
              placeholderTextColor={AppColors.white}
              selectionColor={AppColors.white}
              cursorColor={AppColors.white}
              value={selectedItem ? selectedItem : searchText}
              onChangeText={handleSearch}
              onFocus={clearSelection}
              style={styles.textInputStyle}
            />
            <AntDesign
              name={showDropdown ? 'up' : 'down'}
              size={20}
              color={AppColors.white}
            />
          </View>
        </TouchableOpacity>
      </LinearGradient>
      {showDropdown && (
        <View style={styles.dropdownListView}>
          <FlatListIndicator
            flatListProps={{
              alwaysBounceVertical: true,
              style: styles.dropdownListHeight,
              data: filteredData,
              renderItem: ({item}) => (
                <TouchableOpacity onPress={() => handleItemPress(item)}>
                  <Text style={styles.listTitleStyle}>{item}</Text>
                </TouchableOpacity>
              ),
            }}
            horizontal={false}
            position="right"
            indStyle={styles.scrollIndicatorStyle}
          />
        </View>
      )}
    </View>
  );
}
