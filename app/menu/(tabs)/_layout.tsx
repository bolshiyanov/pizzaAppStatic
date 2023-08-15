import CoffeCup from '@/assets/images/svg/icons/mug-saucer-solid.svg';
import Glass from '@/assets/images/svg/icons/glass-water-droplet-solid.svg';
import Dessert from '@/assets/images/svg/icons/ice-cream-solid.svg';
import Dishes from '@/assets/images/svg/icons/bowl-food-solid.svg';
import Starters from '@/assets/images/svg/icons/pizza-slice-solid.svg';

import {  Tabs } from 'expo-router';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="itemsOne"
        options={{
          title: 'One',
          tabBarIcon: () => <Starters width={28} height={28} />,
          
        }}
      />
      <Tabs.Screen
        name="itemsTwo"
        options={{
          title: 'Two',
          tabBarIcon: () => <Dishes width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="itemsThree"
        options={{
          title: 'Three',
          tabBarIcon: () => <Dessert width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="itemsFour"
        options={{
          title: 'Four',
          tabBarIcon: () => <Glass width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="itemsFive"
        options={{
          title: 'Five',
          tabBarIcon: () => <CoffeCup width={34} height={34} />,
        }}
      />
      
    </Tabs>
  );
}