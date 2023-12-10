import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import NetFlix_app from './NetFlix_app';
import Display_all_card_data from './Display_all_card_data';
import More_details from './More_details';
import Watch_Trailer from './Watch_Trailer';

export default function NetFlix_navigation_panel() {
const Stack = createNativeStackNavigator();
  return (
    
     <NavigationContainer>
      <Stack.Navigator initialRouteName="Home"  screenOptions={{ headerShown: false}}>
        <Stack.Screen name="Home" component={NetFlix_app} options={{orientation:'portrait'}}/>
        <Stack.Screen name="Display_all_card" component={Display_all_card_data} options={{orientation:'portrait'}}/>
        <Stack.Screen name="MoreDetails" component={More_details} options={{orientation:'portrait'}}/>
        <Stack.Screen name="WatchTrailer" component={Watch_Trailer} options={{orientation:'landscape'}}/>
        
      </Stack.Navigator>
    </NavigationContainer>
    
  )
}
