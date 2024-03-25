import React, {useState, useEffect} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatListIndicator} from '@fanchenbao/react-native-scroll-indicator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppColors} from '../../utils/AppColors';
import {styles} from './styles';
import {getListingOnSelectedTopic} from '../../utils/Methods';

const CustomDropdown = ({selectedTopic}) => {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState([]);
  const [selectedItem, setSelectedItem] = useState('');
  const [showDropdown, setShowDropdown] = useState(false);

  useEffect(() => {
    if (selectedTopic) {
      const topicData = getListingOnSelectedTopic(selectedTopic);
      setFilteredData(topicData);
      setSelectedItem('');
    }
  }, [selectedTopic]);

  const handleSearch = text => {
    setSearchText(text);
    setSelectedItem('');
    const filtered = filteredData.filter(item =>
      item.toLowerCase().includes(text.toLowerCase()),
    );
    setFilteredData(
      filtered.length > 0 ? filtered : getListingOnSelectedTopic(selectedTopic),
    );
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
    setFilteredData(getListingOnSelectedTopic(selectedTopic));
  };

  return (
    <View>
      <Text style={styles.question}>
        Which type of "{selectedTopic}" content are you creating?
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
              editable={showDropdown == false ? false : true}
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
};

export default CustomDropdown;
