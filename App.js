import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SearchBar from './src/Screen/SearchBar';
import SearchScreen from './src/Screen/SearchScreen';
import ResultsShowScreen from './src/Screen/ResultsShowScreen';

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen
          name="SearchScreen"
          component={SearchScreen}
          options={{ title: 'Business Search' }}
      />
      <Stack.Screen 
      name="SearchBar" 
      component={SearchBar} />
      <Stack.Screen 
      name="ResultsShowScreen" 
      component={ResultsShowScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
