import React from 'react';
import {
  View,
  Text,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Data} from '../data/Data';

const {width: viewportWidth, height: viewportHeight} = Dimensions.get('window');

const HomeScreen = () => {
  const renderItem = ({item}) => (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: item.image}}
        style={styles.imageBackground}>
        <TouchableOpacity
          style={styles.backIconContainer}
          onPress={() => {
            console.log('Nitin');
          }}>
          <Icon name="arrow-back" size={30} color="#fff" />
        </TouchableOpacity>
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
    <View style={styles.list}>
      <FlatList
        data={Data}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        pagingEnabled
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    height: viewportHeight,
  },
  container: {
    width: viewportWidth,
    height: viewportHeight,
  },
  imageBackground: {
    width: viewportWidth,
    height: viewportHeight / 2,
    justifyContent: 'flex-end',
    position: 'relative',
  },
  backIconContainer: {
    position: 'absolute',
    top: 10,
    left: 10,
    zIndex: 1,
  },
  headlineContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    padding: 15,
  },
  headline: {
    fontSize: 26,
    fontWeight: '700',
    color: '#fff',
  },
  content: {
    padding: 20,
    backgroundColor: '#fff',
    height: '50%',
  },
  description: {
    fontSize: 18,
    color: '#555',
  },
});

export default HomeScreen;
