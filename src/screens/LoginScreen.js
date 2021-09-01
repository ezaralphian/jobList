import { useNavigation } from '@react-navigation/core';
import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { SCREEN_JOBL_LIST } from '../fixture/screenName';

const LoginScreen = ({ route }) => {
  const [isError, setIsError] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigation = useNavigation();

  const onLogin = () => {
    if (username === 'admin' && password === 'admin123') {
      navigation.navigate(SCREEN_JOBL_LIST);
      setIsError(false);
    } else {
      setIsError(true);
    }
  };
  return (
    <View style={styles.loginContainer}>
      <Text>username: admin</Text>
      <Text>password: admin123</Text>
      <View style={[styles.inputWrapper, styles.top20]}>
        <TextInput
          style={styles.input}
          placeholder="username"
          placeholderTextColor="#003f5c"
          onChangeText={setUsername}
        />
      </View>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="password"
          secureTextEntry={true}
          placeholderTextColor="#003f5c"
          onChangeText={setPassword}
        />
      </View>
      {isError && (
        <Text style={styles.errorText}>Wrong username or password</Text>
      )}
      <TouchableOpacity onPress={onLogin} style={styles.loginButton}>
        <Text>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  loginContainer: {
    flex: 1,
    backgroundColor: '#f8fafc',
    display: 'flex',
    justifyContent: 'center',
    padding: 15,
  },
  inputWrapper: {
    backgroundColor: '#fff',
    borderRadius: 25,
    marginBottom: 20,
    justifyContent: 'center',
    borderColor: '#666',
    borderWidth: 0.5,
    height: 50,
    paddingHorizontal: 15,
  },
  input: {
    color: '#64748b',
    height: 50,
  },
  loginButton: {
    borderRadius: 25,
    height: 50,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
  errorText: {
    color: 'red',
    marginVertical: 10,
    textAlign: 'center',
  },
  top20: {
    marginTop: 20,
  },
});
