import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from './components/screens/login'
import SavedClientScreen from './components/screens/savedClientLogin'
import ClientScreen from './components/screens/clientLogin'
import HomeScreen from './components/screens/clientHome'
import RegisterScreen from './components/screens/register'
import ManagerHomeScreen from './components/screens/managerHome'
import ManagerAddScreen from './components/screens/managerAdd'
import InspectorAddScreen from './components/screens/inspectorAdd'
import ResidentAddScreen from './components/screens/residentAdd'
import ResidentScreen from './components/screens/resident'
import InspectorScreen from './components/screens/inspector'
import ManagerScreen from './components/screens/manager'
import ResidentOneScreen from './components/screens/residentOne'
import ManagerTabScreen from './components/screens/managerTab'
import SurveyScreen from './components/screens/survey'
import SurveyOneScreen from './components/screens/SurveyOne'
import AnnouncementScreen from './components/screens/Announcement'
import AnnouncementOneScreen from './components/screens/AnnouncementOne'


// react-native-elements
// react-native-safe-area-context

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Client" component={ClientScreen} options={{headerShown:false}}/>
         <Stack.Screen name="SavedClient" component={SavedClientScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Register" component={RegisterScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ManagerHome" component={ManagerHomeScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Manager" component={ManagerScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ManagerAdd" component={ManagerAddScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Inspector" component={InspectorScreen} options={{headerShown:false}}/>
        <Stack.Screen name="InspectorAdd" component={InspectorAddScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Resident" component={ResidentScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ResidentAdd" component={ResidentAddScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ResidentOne" component={ResidentOneScreen} options={{headerShown:false}}/>
        <Stack.Screen name="ManagerTab" component={ManagerTabScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Survey" component={SurveyScreen} options={{headerShown:false}}/>
        <Stack.Screen name="SurveyOne" component={SurveyOneScreen} options={{headerShown:false}}/>
        <Stack.Screen name="Announcement" component={AnnouncementScreen} options={{headerShown:false}}/>
        <Stack.Screen name="AnnouncementOne" component={AnnouncementOneScreen} options={{headerShown:false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
