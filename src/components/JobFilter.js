import React, { useState } from 'react';
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

export const JobFilter = ({ onApply, location = '', full_time = false }) => {
  const [inputFullltime, setInputFullltime] = useState(full_time);
  const [inputLocation, setInputLocation] = useState(location);
  const applyChanges = () => {
    onApply({
      full_time: inputFullltime,
      location: inputLocation,
    });
  };

  return (
    <View style={styles.filterWrapper}>
      <View style={styles.betweenWrapper}>
        <Text>Fulltime</Text>
        <Switch
          value={inputFullltime}
          onChange={() => setInputFullltime(!inputFullltime)}
        />
      </View>
      <View style={styles.betweenWrapper}>
        <Text>Location</Text>
        <TextInput
          style={styles.input}
          value={inputLocation}
          onChangeText={setInputLocation}
        />
      </View>
      <TouchableOpacity onPress={applyChanges} style={styles.btnApply}>
        <Text>Apply Filter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  filterWrapper: {
    padding: 10,
  },
  betweenWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    borderWidth: 0.5,
    borderColor: 'black',
    padding: 0,
    width: 200,
  },
  flexEnd: {
    justifyContent: 'flex-end',
  },
  btnApply: {
    borderRadius: 5,
    backgroundColor: '#a3a3a3',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    alignSelf: 'flex-end',
    paddingVertical: 5,
  },
});
