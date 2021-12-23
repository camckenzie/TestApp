import * as React from 'react';
import { useState } from 'react';
import { StyleSheet, Button, View, Text, TextInput, Alert,} from 'react-native';


export default function LoginScreen({ navigation }) {
    
    //This handles user states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //This is our dummy admin
    const adminUser = {
        email: "chris@gmail.com",
        password: "password"

    }

    //This handles our login
    const login = async () => {
        if (email==adminUser.email && password==adminUser.password) {
                    navigation.navigate('Welcome');
        } else {
            Alert.alert(
                "Error",
                "Incorrect Email & Password combination!",
                [{text: "OK"}],
                {cancelable: true}
            )
        }
        
    }
    
    return (
      <View style={styles.body}>
        <Text style={styles.title}>Please enter your login credentials</Text>
        
        <TextInput
            style={styles.input}
            placeholder='Your Email'
            value={email}
            onChangeText={setEmail}
        >
        </TextInput>
        <TextInput
            style={styles.input}
            placeholder='Your Password'
            value={password}
            onChangeText={setPassword}
            // Secure Text entry so no one can see
            secureTextEntry={true}
        >
        </TextInput>

        <Button
          title="Login"
          onPress={() => login()}
        />
      </View>
    );
}

const styles = StyleSheet.create({
    title:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    body: {
        //How items will fill the available space
        flex: 1,
        //alignItems centers by width
        alignItems: 'center',
        //justifyContent centers by height
        justifyContent: 'center',
    },
    input: {
        fontSize: 16,
        //How wide each input box will be
        width: 200,
        //Places a border with a thickness of 1. The higher the value, the thicker the border 
        borderWidth: 1,
        //This spaces out the input boxes
        marginVertical: 20
    },
})