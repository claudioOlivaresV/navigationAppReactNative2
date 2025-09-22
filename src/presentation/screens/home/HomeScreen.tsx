import {Pressable, Text, View} from 'react-native';
import {useEffect} from 'react';
import {
  type NavigationProp,
  useNavigation,
  DrawerActions,
} from '@react-navigation/native';

import {globalStyles} from '../../theme/theme';
import {PrimaryButton} from '../../components/shared/PrimaryButton';
import type {RootStackParams} from '../../routes/StackNavigator';

export const HomeScreen = () => {
  const navigation = useNavigation<NavigationProp<RootStackParams>>();
  return (
    <View style={globalStyles.container}>
      <PrimaryButton
        onPress={() => navigation.navigate('Products')}
        label="Ir a Productos"
      />
      <PrimaryButton
        onPress={() => navigation.navigate('Settings')}
        label="Ir a Settings"
      />
    </View>
  );
};
