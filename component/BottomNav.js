import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from "@expo/vector-icons";
import { About } from '../views/About';
import { Cart } from '../views/Cart';
import { Home } from '../views/Home';
import { Profile } from '../views/Profile';

const Tab = createBottomTabNavigator();

export const BottomNav = () => {
  return ( 
    <NavigationContainer>
        <Tab.Navigator initialRouteName="Home"
            screenOptions={({ route }) => ({
                tabBarIcon: ({ focused, color, size }) => {
                  let iconName;
      
                  if (route.name === 'Home') {
                    iconName = focused
                      ? 'home' : 'home-outline';
                  } else if (route.name === 'About') {
                    iconName = focused ? 'information-circle' : 'information-circle-outline';
                  } else if (route.name === 'Cart') {
                    iconName = focused ? 'md-cart' : 'md-cart-outline';
                  } else if (route.name === 'Profile') {
                    iconName = focused ? 'md-people' : 'md-people-outline';
                  }
                  return <Ionicons name={iconName} size={size} color={color} />;
                },
                tabBarActiveTintColor: '#8d95ed',
                tabBarInactiveTintColor: 'gray',
              })}
        >
            <Tab.Screen name="Home" component={Home}
                options={{
                    headerShown: false,
                }}
             />
            <Tab.Screen name="About" component={About}
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Cart" component={Cart} 
                options={{
                    headerShown: false,
                }}
            />
            <Tab.Screen name="Profile" component={Profile} 
                options={{
                    headerShown: false,
                }}
            />
        </Tab.Navigator>
    </NavigationContainer>
  );
}