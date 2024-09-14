import React from 'react';
import {View, StyleSheet} from 'react-native';
import TopCategoryTabs from '../components/TopCategoryTabs';
import {SafeAreaView} from 'react-native-safe-area-context';

const HomeScreen = () => {
  const handleTabPress = tab => {
    console.log(`Selected tab ${tab}`);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TopCategoryTabs onTabPress={handleTabPress} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
