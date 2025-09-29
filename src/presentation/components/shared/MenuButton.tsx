import React, {useEffect} from 'react';
import {RootStackParams} from '../../routes/StackNavigator';
import {
  DrawerActions,
  NavigationProp,
  useNavigation,
} from '@react-navigation/native';
import {Pressable, Text} from 'react-native';

export const MenuButton = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();

  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => {
        return (
          <Pressable
            onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
            <Text>Menu</Text>
          </Pressable>
        );
      },
    });
  }, [navigation]);

  return <></>;
};
