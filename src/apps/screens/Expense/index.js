import React, {useContext, useState} from 'react';
import {View, TextInput, FlatList, StyleSheet} from 'react-native';
import {ThemeContext} from '../../../theme';
import {TopBar, Header, Button} from '../../components';

export default function ExpenseScreen({navigation}) {
  const theme = useContext(ThemeContext);
  const [name, setName] = useState('Medecines');
  const [cost, setCost] = useState('100');

  function renderForm(value, onChange) {
    return (
      <TextInput
        style={[styles.form, {borderColor: theme.color, color: theme.color}]}
        value={value}
        onChangeText={onChange}
        placeholder="Name"
      />
    );
  }

  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <Header />

      <TopBar
        title="Edit expense"
        subTitle="Modify the expense"
        more={{show: false, pink: false}}
      />
      {renderForm(name, text => {
        setName(text);
      })}
      {renderForm(cost, text => {
        setCost(text);
      })}
      <Button text="Save" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 32,
    paddingHorizontal: 24,
  },
  form: {
    height: 50,
    borderWidth: 1,
    borderRadius: 10,
    fontWeight: '500',
    paddingHorizontal: 10,
    marginTop: 10,
    marginBottom: 20,
  },
});
