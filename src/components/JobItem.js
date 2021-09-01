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
        <View>
          <Text>{item?.title ?? ''}</Text>
          <Text>{item?.company ?? ''}</Text>
          <Text>{item?.location ?? ''}</Text>
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
});
