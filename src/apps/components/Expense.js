import React, {useContext} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {ThemeContext} from '../../theme';

export default function Expense({day, expenses}) {
  const theme = useContext(ThemeContext);
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    day: {
      color: theme.pink,
      fontSize: 16,
      fontWeight: '700',
      marginRight: 10,
    },
    modify: {
      color: theme.blue,
      fontSize: 16,
      fontWeight: '700',
    },
    row: {
      flexDirection: 'row',
    },
    wrap: {
      marginTop: 25,
    },
    text: {
      fontSize: 16,
      color: theme.color,
    },
    justifyBetween: {justifyContent: 'space-between'},
  });

  return (
    <View style={styles.wrap}>
      <View style={[styles.row, {marginBottom: 10}]}>
        <Text style={styles.day}>{day}</Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Expense');
          }}>
          <Text style={styles.modify}>modify</Text>
        </TouchableOpacity>
      </View>
      {expenses.map((expense, ind) => (
        <View key={ind} style={[styles.row, styles.justifyBetween]}>
          <Text style={styles.text}>{expense.name}</Text>
          <Text style={styles.text}>{expense.cost}</Text>
        </View>
      ))}
    </View>
  );
}
