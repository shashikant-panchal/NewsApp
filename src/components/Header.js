import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <View style={styles.leftSpacer} />
      <Text style={styles.title}>Breaking News</Text>
      <TouchableOpacity style={styles.notificationIcon}>
        <Icon name="notifications-outline" size={30} color="black" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
  leftSpacer: {
    width: 40,
  },
  title: {
    flex: 1,
    textAlign: 'center',
    fontSize: 25,
    color: 'Black',
    fontWeight: 'bold',
  },
  notificationIcon: {
    padding: 10,
  },
});

export default Header;
