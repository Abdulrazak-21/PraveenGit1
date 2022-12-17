import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 24,
  },
  body: {
    fontSize: 18,
  },
  header: {
    marginBottom: 10,
  },
});

const EmailInfo = props => {
  const {route} = props;
  const {params} = route;
  const {item} = params;
  const {title, body} = item;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View>
        <Text style={styles.body}>{body}</Text>
      </View>
    </View>
  );
};

export default EmailInfo;
