import React, {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {View, Text} from 'react-native';
import {Header} from '../../components';
import * as Actions from './store/actions';

function Spends() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Actions.addCount());
  }, [dispatch]);
  return (
    <View style={{flex: 1}}>
      <Header />
      <Text>Hello</Text>
    </View>
  );
}

export default Spends;
