import FontAwesome from '@expo/vector-icons/FontAwesome';
import FontAwesome5  from '@expo/vector-icons/FontAwesome5';
import CoffeCup from '@/assets/images/svg/icons/mug-saucer-solid.svg';
import Glass from '@/assets/images/svg/icons/glass-water-droplet-solid.svg';
import Dessert from '@/assets/images/svg/icons/ice-cream-solid.svg';
import Dishes from '@/assets/images/svg/icons/bowl-food-solid.svg';
import Starters from '@/assets/images/svg/icons/pizza-slice-solid.svg';

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import  Entypo from '@expo/vector-icons/Entypo';   
import {  Tabs } from 'expo-router';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="snacks"
        options={{
          title: 'Snacks',
          tabBarIcon: () => <Starters width={28} height={28} />,
          
        }}
      />
      <Tabs.Screen
        name="dishes"
        options={{
          title: 'Dishes',
          tabBarIcon: () => <Dishes width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="dessert"
        options={{
          title: 'Dessert',
          tabBarIcon: () => <Dessert width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="drinks"
        options={{
          title: 'Drinks',
          tabBarIcon: () => <Glass width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="coffee"
        options={{
          title: 'Hot',
          tabBarIcon: () => <CoffeCup width={34} height={34} />,
        }}
      />
      
    </Tabs>
  );
}