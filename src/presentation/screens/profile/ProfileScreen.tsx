import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {DrawerActions, useNavigation} from '@react-navigation/native';

import {PrimaryButton} from '../../components/shared/PrimaryButton';

export const ProfileScreen = () => {
  const navigation = useNavigation();
  const {top} = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        marginTop: top + 20,
        paddingHorizontal: 20,
      }}>
      <Text style={{marginBottom: 15}}>Profile</Text>
      <PrimaryButton
        label="Abrir Menu"
        onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}
      />
    </View>
  );
};
