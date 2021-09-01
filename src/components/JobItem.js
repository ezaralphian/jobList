import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/core';
import { SCREEN_JOBL_DETAIL } from '../fixture/screenName';

export const JobItem = ({ item }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(SCREEN_JOBL_DETAIL, { id: item.id })}
    >
      <View style={styles.card}>
        <Image
          style={styles.img}
          source={{
            uri: item.company_logo,
          }}
        />
        <View style={styles.flex1}>
          <Text>{item?.title ?? ''}</Text>
          <Text style={styles.textGrey}>{item?.company ?? ''}</Text>
          <Text style={styles.textGrey}>{item?.location ?? ''}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  card: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginBottom: 10,
    padding: 10,
    flexDirection: 'row',
  },
  img: {
    width: 70,
    height: 70,
    marginRight: 10,
  },
  textGrey: {
    color: 'grey',
    marginBottom: 5,
    fontSize: 12,
  },
  flex1: { flex: 1 },
});
