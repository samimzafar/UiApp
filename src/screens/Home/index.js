import React, {useState} from 'react';
import {View, TextInput, Text, TouchableOpacity} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {FlatListIndicator} from '@fanchenbao/react-native-scroll-indicator';
// import FontAwesome from 'react-native-vector-icons/FontAwesome';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
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

export default function CustomDropdown() {
  const [searchText, setSearchText] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [selectedItem, setSelectedItem] = useState('');

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

  const clearSelection = () => {
    setSearchText('');
    setSelectedItem('');
    setFilteredData(data);
  };

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'green',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      {/* <FontAwesome name="rocket" size={80} color="white" />
      <MaterialIcons name="credit-card" size={80} color="white" /> */}
      <LinearGradient
        colors={[
          'rgba(101,71,219,1)',
          'rgba(101,71,219,1)',
          'rgba(147,87,230,1)',
          'rgba(147,87,230,1)',
          'rgba(192,102,240,1)',
          'rgba(192,102,240,1)',
        ]}
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        style={{
          borderRadius: 8,
          height: 46,
          width: '80%',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        {/* Inner view with solid background color */}
        <View
          style={{
            backgroundColor: 'rgba(30, 29, 37, 1)',
            borderRadius: 8,
            flexDirection: 'row',
            height: 42,
            alignItems: 'center',
            paddingHorizontal: 10,
            width: '99%',
          }}>
          <TextInput
            placeholder="Search"
            placeholderTextColor={'white'}
            selectionColor="white"
            cursorColor="white"
            value={selectedItem ? selectedItem : searchText}
            onChangeText={handleSearch}
            onFocus={clearSelection} // Clear selection when input is focused
            style={{
              flex: 1,
              color: 'white',
            }}
          />
        </View>
      </LinearGradient>
      {/* Dropdown list */}
      <View
        style={{
          backgroundColor: 'rgba(30, 29, 37, .6)',
          borderRadius: 10,
          marginTop: 10,
          width: '80%',
        }}>
        <FlatListIndicator
          flatListProps={{
            alwaysBounceVertical: true,
            style: {
              height: 400,
            },
            data: filteredData,
            renderItem: ({item}) => (
              <TouchableOpacity onPress={() => handleItemPress(item)}>
                <Text
                  style={{
                    color: 'white',
                    padding: 10,
                  }}>
                  {item}
                </Text>
              </TouchableOpacity>
            ),
          }}
          horizontal={false}
          position="right"
          indStyle={{
            width: 5,
            backgroundColor: 'rgba(100, 112, 218, 1)',
          }}
        />
      </View>
    </View>
  );
}
