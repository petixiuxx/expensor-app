import React, {useContext, useEffect} from 'react';
import {View, SafeAreaView, FlatList, StyleSheet} from 'react-native';
import firebase from 'react-native-firebase';

import {ThemeContext} from '../../../theme';
import {TopBar, Expense, Button} from '../../components';

const mock = [
  {
    id: '1',
    day: '14/02',
    expenses: [
      {name: 'Medicines', cost: '500'},
      {name: 'Rent', cost: '200'},
    ],
  },
  {
    id: '2',
    day: '15/02',
    expenses: [
      {name: 'Example', cost: '500'},
      {name: 'Example', cost: '200'},
    ],
  },
];

export default function ManageExpense({navigation}) {
  const theme = useContext(ThemeContext);
  const ref = firebase.firestore().collection('users');

  useEffect(() => {
    async function testDB() {
      await ref.add({
        name: 'harry',
      });
    }
    // testDB();
  }, [ref]);
  return (
    <View style={[styles.container, {backgroundColor: theme.backgroundColor}]}>
      <TopBar
        title="Manage expenses"
        subTitle="add, modify or delete entries"
        more={{
          show: true,
          text: 'showing entries for December',
        }}
      />
      <SafeAreaView>
        <FlatList
          style={{height: 500}}
          data={mock}
          renderItem={({item}) => (
            <Expense day={item.day} expenses={item.expenses} />
          )}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <Button text="Add New" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 42,
    paddingHorizontal: 24,
    justifyContent: 'space-between',
  },
});
