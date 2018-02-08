import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { Tenants } from './../api/tenants';
export default class KingdomsScreen extends React.Component {
  static navigationOptions = {
    title: 'Kingdom Messages',
  };

  render() {
    return (
      <ScrollView style={styles.container}>

        <View><Text>Test</Text></View>
        {Tenants.map(tenant => {
          return <View key={tenant.id} style={{padding: 10, marginBottom: 10}}>
            <Text>{tenant.name}</Text>
          </View>
        })}

      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 15,
    backgroundColor: '#fff',
  },
});
