import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import useEmails from '../../hooks/useEmails';
import { Email } from '../../interfaces/Email';
//Hello world
const styles = StyleSheet.create({
  emailRow: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    backgroundColor: '#fff',
  },
});

const Emails = ({ navigation }) => {
  const { navigate } = navigation;

  const { isLoading, emails, error } = useEmails();

  if (isLoading) {
    return <Text>Loading...</Text>;
  }

  return (
    <View>
      <FlatList
        data={emails}
        renderItem={({ item }) => {
          const { title } = item;

          return (
            <TouchableOpacity
              onPress={() => {
                navigate('email-info', { item: item });
              }}>
              <View style={styles.emailRow}>
                <Text>{title}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        keyExtractor={email => `${email.id}`}
      />
    </View>
  );
};

export default Emails;
