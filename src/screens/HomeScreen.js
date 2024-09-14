import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
} from 'react-native';
import { Data } from '../data/Data';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const HomeScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.imageBackground}>
        <View style={styles.headlineContainer}>
          <Text style={styles.headline}>{item.headline}</Text>
        </View>
      </ImageBackground>
      <View style={styles.content}>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </View>
  );

  return (
    <FlatList
      data={Data}
      renderItem={renderItem}
      keyExtractor={item => item.id}
      pagingEnabled
      showsVerticalScrollIndicator={false}
      style={styles.list}
    />
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
  },
  container: {
    width: viewportWidth,
    height: viewportHeight,
  },
  imageBackground: {
    width: viewportWidth,
    height: viewportHeight / 2,
    justifyContent: 'flex-end',
  },
  headlineContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
  },
  headline: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 15,
    backgroundColor: '#fff',
    height: '50%',
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default HomeScreen;
