import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const BookmarkCard = ({Url, category, title}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        padding: 10,
        margin: 10,
      }}>
      <Image
        style={{
          height: 140,
          width: 130,
          borderRadius: 10,
          backgroundColor: 'red',
        }}
        source={{
          uri: Url,
        }}
      />
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            padding: 10,
          }}>
          <Text style={{color: 'grey'}}>{category}</Text>
          <Icon name="ellipsis-vertical" size={17} color="grey" />
        </View>
        <Text
          style={{
            fontSize: 19,
            fontWeight: '500',
            color: 'black',
            marginHorizontal: 10,
          }}>
          {title}
        </Text>
        <Text style={{color: 'grey', margin: 10}}> Sep 15 , 2024</Text>
      </View>
    </View>
  );
};

export default BookmarkCard;
