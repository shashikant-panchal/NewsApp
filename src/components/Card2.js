import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';

const Card2 = ({image, headline}) => {
  return (
    <View style={styles.cardContainer}>
      <Image source={{uri: image}} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.headline}>{headline}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    margin: 15,
    padding: 15,
    borderRadius: 12,
    backgroundColor: '#ffffff',
    shadowColor: '#000000',
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.15,
    shadowRadius: 20,
    elevation: 5,
    borderColor: '#e0e0e0',
    borderWidth: 1,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
  },
  textContainer: {
    flex: 1,
    marginLeft: 15,
    justifyContent: 'center',
  },
  headline: {
    fontSize: 18,
    fontWeight: '600',
    color: '#333333',
    lineHeight: 24,
  },
});

export default Card2;
