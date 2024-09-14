import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';

const tabs = [
  'For You',
  'Hot',
  'Sports',
  'Entertainment',
  'Tech',
  'Science',
  'Stocks',
];

const TopCategoryTabs = ({onTabPress}) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0]);

  const handleTabPress = tab => {
    setSelectedTab(tab);
    if (onTabPress) onTabPress(tab);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={tabs}
        renderItem={({item}) => (
          <TouchableOpacity
            style={[
              styles.tab,
              item === selectedTab ? styles.selectedTab : null,
            ]}
            onPress={() => handleTabPress(item)}>
            <Text
              style={[
                styles.tabText,
                item === selectedTab ? styles.selectedTabText : null,
              ]}>
              {item}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingVertical: 10,
    margin: 5,
  },
  tab: {
    paddingVertical: 5,
    paddingHorizontal: 15,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  selectedTab: {
    backgroundColor: 'black',
  },
  tabText: {
    fontWeight: '600',
    fontSize: 16,
    color: '#000',
  },
  selectedTabText: {
    color: '#fff',
  },
});

export default TopCategoryTabs;
