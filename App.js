import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from "./screens/LoginScreen";
import WelcomeScreen from "./screens/WelcomeScreen";
import RegisterationScreen from "./screens/RegistrationScreen";
//Below is new
import {decode, encode} from 'base-64'
if (!global.btoa) {  global.btoa = encode }
if (!global.atob) { global.atob = decode }

const Stack = createNativeStackNavigator();


function App() {
  
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState(null)

  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{ headerShown: false }}>
          {/* Below checks for user?? */}
          { user ? (
            <Stack.Screen name="Welcome">
              {props => <WelcomeScreen {...props} extraData={user} />}
            </Stack.Screen>
          ): (
            <>
              <Stack.Screen name="Login" component={LoginScreen} />
              <Stack.Screen name="Registration" component={RegistrationScreen} />
            </>
          )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;