import * as React from 'react';
import { StyleSheet, Button, View, Text } from 'react-native';



export default function WelcomeScreen({ navigation }) {
    return (
      <View style={styles.body}>
        <Text style={styles.title}>Welcome, Chris!</Text>
  
        <Button
          title="Logout"
          onPress={() => navigation.navigate('Login')}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold',
        //Gives the title vertical space from the button. Otherwise they would be on top of each other 
        height: 100,
    },
    body: {
        //How items will fill the available space
        flex: 1,
        //alignItems centers by width
        alignItems: 'center',
        //justifyContent centers by height
        justifyContent: 'center',
        
    },


})