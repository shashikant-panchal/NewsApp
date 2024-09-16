import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import BookmarkCard from '../components/BookmarkCard';

const SavedScreen = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: '600',
          textAlign: 'center',
          marginBottom: 16,
        }}>
        Bookmarks
      </Text>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
        }}>
        <BookmarkCard
          Url={
            'https://c4.wallpaperflare.com/wallpaper/808/763/814/sports-background-hd-wallpaper-thumb.jpg'
          }
          category={'Sports'}
          title={'IPL Auction 2024, everything you need to know'}
        />
        <BookmarkCard
          Url={'https://bpac.in/wp-content/uploads/2020/07/BPAC_Main.png'}
          category={'Politics'}
          title={'What Defines Good Political Leadership?'}
        />
        <BookmarkCard
          Url={'https://etimg.etb2bimg.com/photo/81478822.cms'}
          category={'Entertainment'}
          title={'How can the entertainment sector ensure a full revival'}
        />
        <BookmarkCard
          Url={
            'https://www.americanprogressaction.org/wp-content/uploads/sites/3/2021/08/medium-import-88664.png'
          }
          category={'Trending'}
          title={`What's Trending? Public Attention - Center for American Progress Action`}
        />
        <BookmarkCard
          Url={
            'https://c4.wallpaperflare.com/wallpaper/808/763/814/sports-background-hd-wallpaper-thumb.jpg'
          }
          category={'Sports'}
          title={'IPL Auction 2024, everything you need to know'}
        />
        <BookmarkCard
          Url={'https://bpac.in/wp-content/uploads/2020/07/BPAC_Main.png'}
          category={'Politics'}
          title={'What Defines Good Political Leadership?'}
        />
        <BookmarkCard
          Url={'https://etimg.etb2bimg.com/photo/81478822.cms'}
          category={'Entertainment'}
          title={'How can the entertainment sector ensure a full revival'}
        />
        <BookmarkCard
          Url={
            'https://www.americanprogressaction.org/wp-content/uploads/sites/3/2021/08/medium-import-88664.png'
          }
          category={'Trending'}
          title={`What's Trending? Public Attention - Center for American Progress Action`}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

export default SavedScreen;
