import React, {useContext} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ThemeContext} from '../../theme';

export default function TopBar({title, subTitle, more}) {
  const theme = useContext(ThemeContext);

  const styles = StyleSheet.create({
    container: {},
    title: {
      fontSize: 28,
      fontWeight: '900',
      color: theme.color,
      paddingBottom: 5,
    },
    subTitle: {
      fontSize: 20,
      fontWeight: '300',
      color: theme.grey,
      paddingBottom: 16,
    },
    more: {
      color: more.pink ? theme.pink : theme.color,
      fontSize: 20,
      fontWeight: '600',
    },
  });
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.subTitle}>{subTitle}</Text>
      {more.show ? <Text style={styles.more}>{more.text}</Text> : null}
    </View>
  );
}
