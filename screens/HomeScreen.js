import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TouchableOpacity } from 'react-native-web';
import { useNavigation } from '@react-navigation/native';
import { auth } from '../firebase';
import { signOut } from "firebase/auth";

const HomeScreen = () => {

  const navigation = useNavigation();

  const handleSignOut = () => {
    signOut(auth).then(() => {
      navigation.navigate('Login');
    }).catch((error) => {
        const errorMessage = error.message;
        alert(error.message);
    });
  };

  return (
    <View style={styles.container}>
      <Text>Email: {auth.currentUser?.email}</Text>
      <TouchableOpacity
        onPress={() => handleSignOut()}
        style={styles.button}
      >
        <Text style={styles.buttonText}>Sign out</Text>
      </TouchableOpacity>
    </View>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center' 
  },
  button: {
    backgroundColor: '#0782F9',
    width: '60%',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 40
},
buttonText: {
    color: '#FFF',
    fontWeight: 700,
    fontSize: 16
}
})