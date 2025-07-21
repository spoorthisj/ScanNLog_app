import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FormSelectorScreen from '../screens/FormSelectorScreen';
import FormBuilderScreen from '../screens/FormBuilderScreen';
import ReviewScreen from '../screens/ReviewScreen';
import RegisterScreen from '../screens/RegisterScreen';
import LoginScreen from '../screens/LoginScreen';
import ManagerSelectionScreen from '../screens/ManagerSelectionScreen';
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="ManagerSelection" component={ManagerSelectionScreen} />
        <Stack.Screen name="FormSelector" component={FormSelectorScreen} />
        <Stack.Screen name="FormBuilder" component={FormBuilderScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
