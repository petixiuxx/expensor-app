import React from 'react';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import store from './store';
import {ThemeProdiver} from '../theme';
import THEMES from '../theme/theme.json';
import Spends from './screens/Spends';
import ManageExpense from './screens/ManageExpense';
import Expense from './screens/Expense';

const Stack = createStackNavigator();

const theme = THEMES[0];

const App = () => (
  <ThemeProdiver value={theme}>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none">
          <Stack.Screen name="ManageExpense" component={ManageExpense} />
          <Stack.Screen name="Spends" component={Spends} />
          <Stack.Screen name="Expense" component={Expense} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </ThemeProdiver>
);

export default App;
