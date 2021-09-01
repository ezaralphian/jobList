import React, { useState } from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { SCREEN_JOBL_LIST } from '../fixture/screenName';

export const JobSearch = ({ showFilter, setShowFilter }) => {
  const { params } = useRoute();
  const navigation = useNavigation();

  const [search, setSearch] = useState(params?.description ?? '');

  const onSearch = () => {
    navigation.push(SCREEN_JOBL_LIST, { description: search });
  };

  return (
    <>
      <View style={styles.searchContainer}>
        <View style={styles.flex1}>
          <MaterialIcons
            style={styles.serachIcon}
            name="search"
            color={'black'}
            size={20}
          />
          <TextInput
            style={styles.input}
            placeholder="search"
            value={search}
            returnKeyType="search"
            onChangeText={setSearch}
            onSubmitEditing={onSearch}
            onBlur={() => setSearch(params?.description ?? '')}
          />
        </View>
        <TouchableOpacity onPress={() => setShowFilter(!showFilter)}>
          <MaterialIcons
            name={showFilter ? 'expand-less' : 'expand-more'}
            color={'black'}
            size={30}
          />
        </TouchableOpacity>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
  },
  input: {
    borderColor: 'black',
    borderWidth: 1,
    borderRadius: 20,
    color: '#64748b',
    paddingVertical: 0,
    paddingHorizontal: 30,
  },
  serachIcon: {
    position: 'absolute',
    top: 6,
    left: 6,
  },
  flex1: { flex: 1 },
});
