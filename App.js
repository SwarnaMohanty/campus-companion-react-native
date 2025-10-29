import { NavigationContainer } from '@react-navigation/native';
import { LogBox, StatusBar } from 'react-native';
import DrawerNavigator from './navigation/DrawerNavigator';
// ignore some reanimated warnings in example projects
LogBox.ignoreLogs(['Reanimated 2']);
export default function App() {
return (
<NavigationContainer>
<StatusBar barStyle="light-content" />
<DrawerNavigator />
</NavigationContainer>
);
}