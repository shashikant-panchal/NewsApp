import {View, Text, Image} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import EditIcon from 'react-native-vector-icons/Feather';
import ProfileCard from '../components/ProfileCard';

const ProfileScreen = () => {
  const Profile = require('../assets/Images/enrollmentProfile.png');
  return (
    <SafeAreaView>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          padding: 20,
        }}>
        <Text style={{fontSize: 16, color: 'black', fontWeight: '600'}}>
          Profile
        </Text>
        <View>
          <Icon name="settings-outline" size={20} color="black" />
        </View>
      </View>
      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View style={{flexDirection: 'row'}}>
          <Image
            resizeMode="contain"
            source={Profile}
            style={{height: 60, width: 60, marginHorizontal: 10}}
          />
          <View style={{alignSelf: 'center'}}>
            <Text>Nitin Guttedar</Text>
            <Text style={{marginVertical: 5}}>@nitin.guttedar</Text>
          </View>
        </View>
        <View style={{margin: 20}}>
          <EditIcon name="edit-3" size={18} color="black" />
        </View>
      </View>
      <ProfileCard title={'Refer Friends'} IconName={'person-add-outline'} />
      <ProfileCard title={'Bookmarks'} IconName={'bookmark-outline'} />
      <ProfileCard title={'Categories'} IconName={'grid-outline'} />
      <ProfileCard title={'Language'} IconName={'text-outline'} />
      <ProfileCard
        title={'Contact Us'}
        IconName={'chatbubble-ellipses-outline'}
      />
    </SafeAreaView>
  );
};

export default ProfileScreen;
