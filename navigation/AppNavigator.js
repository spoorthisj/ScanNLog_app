import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import FormSelectorScreen from '../screens/FormSelectorScreen';
import Form1SetupScreen from '../screens/Form1SetupScreen';
import Form2SetupScreen from '../screens/Form2SetupScreen';
import Form3SetupScreen from '../screens/Form3SetupScreen';
import FormBuilderScreen from '../screens/FormBuilderScreen';
import CameraCaptureScreen from '../screens/CameraCaptureScreen';
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
        <Stack.Screen name="Form1Setup" component={Form1SetupScreen} />
        <Stack.Screen name="Form2Setup" component={Form2SetupScreen} />
        <Stack.Screen name="Form3Setup" component={Form3SetupScreen} />
        
        <Stack.Screen name="FormBuilder" component={FormBuilderScreen} />
        <Stack.Screen name="CameraCapture" component={CameraCaptureScreen} />
        <Stack.Screen name="Review" component={ReviewScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
