import React from 'react';
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
