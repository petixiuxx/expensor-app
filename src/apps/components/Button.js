import React, {useContext} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {ThemeContext} from '../../theme';

export default function Button({text}) {
  const theme = useContext(ThemeContext);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: theme.blue,
      borderRadius: 10,
      height: 48,
      width: 156,
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'flex-end',
    },
    text: {
      color: '#fff',
      fontSize: 18,
      fontWeight: '900',
    },
  });
  return (
    <TouchableOpacity>
      <View style={styles.container}>
        <Text style={styles.text}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}
