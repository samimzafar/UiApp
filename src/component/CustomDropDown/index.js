import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatListIndicator} from '@fanchenbao/react-native-scroll-indicator';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {AppColors} from '../../utils/AppColors';
import {styles} from './styles';
import useCustomDropdown from '../../hooks/useCustomDropDown';

const CustomDropdown = ({selectedTopic}) => {
  const {
    searchText,
    filteredData,
    selectedItem,
    showDropdown,
    handleSearch,
    handleItemPress,
    toggleDropdown,
    clearSelection,
  } = useCustomDropdown(selectedTopic);

  const [selectedItemIndex, setSelectedItemIndex] = useState(null);

  const handlePressItem = (item, index) => {
    handleItemPress(item);
    setSelectedItemIndex(index);
  };

  return (
    <View style={styles.mainContainer}>
      <Text style={styles.question}>
        Which type of "{selectedTopic}" content are you {'\n'} creating?
      </Text>
      <LinearGradient
        colors={
          showDropdown
            ? AppColors.bluePinkPurpleGradient
            : AppColors.blackGradient
        }
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
              renderItem: ({item, index}) => (
                <TouchableOpacity onPress={() => handlePressItem(item, index)}>
                  <Text
                    style={[
                      styles.listTitleStyle,
                      selectedItemIndex === index && {
                        backgroundColor: AppColors.bluePurple,
                      },
                    ]}>
                    {item}
                  </Text>
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
