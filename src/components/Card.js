import React from 'react';
import {View, Text, Image, StyleSheet, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Card = ({image, headline}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.content}>
        <Text style={styles.headline}>{headline}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    marginHorizontal: 15,
    width: width * 0.6,
    height: height / 3.5,
    borderRadius: 15,
    overflow: 'hidden',
    backgroundColor: '#fff',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.2,
    shadowRadius: 4,
    margin: 10,
  },
  image: {
    height: 200,
    width: '100%',
    resizeMode: 'cover',
  },
  content: {
    padding: 15,
  },
  headline: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});

export default Card;
