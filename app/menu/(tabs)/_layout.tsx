import ItemIcom1 from '@/assets/images/svg/icons/building-flag-solid.svg';
import ItemIcom2 from '@/assets/images/svg/icons/building-wheat-solid.svg';
import ItemIcom3 from '@/assets/images/svg/icons/city-solid.svg';
import ItemIcom4 from '@/assets/images/svg/icons/mountain-city-solid.svg';
import ItemIcom5 from '@/assets/images/svg/icons/tree-city-solid.svg';

import {  Tabs } from 'expo-router';


export default function TabLayout() {

  return (
    <Tabs screenOptions={{headerShown: false}}>
      <Tabs.Screen
        name="itemsOne"
        options={{
          title: 'One',
          tabBarIcon: () => <ItemIcom1 width={28} height={28} />,
          
        }}
      />
      <Tabs.Screen
        name="itemsTwo"
        options={{
          title: 'Two',
          tabBarIcon: () => <ItemIcom2 width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="itemsThree"
        options={{
          title: 'Three',
          tabBarIcon: () => <ItemIcom3 width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="itemsFour"
        options={{
          title: 'Four',
          tabBarIcon: () => <ItemIcom4 width={28} height={28} />,
        }}
      />
      <Tabs.Screen
        name="itemsFive"
        options={{
          title: 'Five',
          tabBarIcon: () => <ItemIcom5 width={34} height={34} />,
        }}
      />
      
    </Tabs>
  );
}