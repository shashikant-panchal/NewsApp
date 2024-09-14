import React from 'react';
import {View, StyleSheet, FlatList, Text} from 'react-native';
import TopCategoryTabs from '../components/TopCategoryTabs';
import {SafeAreaView} from 'react-native-safe-area-context';
import SearchBox from '../components/SearchBox';
import Header from '../components/Header';
import {Data} from '../data/Data';
import Card from '../components/Card';
import Card2 from '../components/Card2';

const DiscoverScreen = () => {
  const handleTabPress = tab => {
    console.log(`Selected tab ${tab}`);
  };

  const renderItem = ({item}) => (
    <Card image={item.image} headline={item.headline} />
  );

  const renderCard2Item = ({item}) => (
    <Card2 image={item.image} headline={item.headline} />
  );

  const renderHeader = () => (
    <View style={styles.headerContainer}>
      <Text style={styles.headerText}>Latest News</Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <SearchBox />
      <TopCategoryTabs onTabPress={handleTabPress} />
      <View style={styles.horizontalListContainer}>
        <FlatList
          data={Data}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </View>
      <FlatList
        data={Data}
        showsVerticalScrollIndicator={false}
        renderItem={renderCard2Item}
        keyExtractor={item => item.id}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={styles.verticalListContainer}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: 'white',
  },
  horizontalListContainer: {
    margin: 5,
  },
  verticalListContainer: {
    flexGrow: 1,
    margin: 10,
  },
  headerContainer: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default DiscoverScreen;
