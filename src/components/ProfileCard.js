import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Icons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
const ProfileCard = ({title, IconName}) => {
  return (
    <View style={styles.mainConatiner}>
      <View style={{flexDirection: 'row'}}>
        <Icons name={IconName} size={20} color="black" />
        <Text style={{marginHorizontal: 20}}>{title}</Text>
      </View>

      <Feather name="chevron-right" size={20} color="black" />
    </View>
  );
};

export default ProfileCard;

const styles = StyleSheet.create({
  mainConatiner: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    width: '90%',
    alignSelf: 'center',
    margin: 18,
    padding: 20,
    borderRadius: 10,
    justifyContent: 'space-between',
  },
});
