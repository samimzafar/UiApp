import React, {useState, useEffect} from 'react';
import {getListingOnSelectedTopic} from '../utils/Methods';
const useCustomDropdown = selectedTopic => {
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

  return {
    searchText,
    filteredData,
    selectedItem,
    showDropdown,
    handleSearch,
    handleItemPress,
    toggleDropdown,
    clearSelection,
  };
};

export default useCustomDropdown;
