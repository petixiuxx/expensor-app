import React, {useContext} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {ThemeContext} from '../../theme';

export default function Header() {
  const navigation = useNavigation();
  const theme = useContext(ThemeContext);

  return (
    <View style={{marginVertical: 20}}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={{color: theme.blue, fontWeight: 'bold'}}>Back</Text>
      </TouchableOpacity>
    </View>
  );
}
