import React from 'react';
import {
  Button,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PrincipalProps } from './PropsTelas';

const TelaPrincipal = ({ navigation, route }: PrincipalProps) => {
  return (
    <View style={styles.container}>
      <Text>Tela Inicial</Text>

    </View>
  );
}

export default TelaPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F8F8FF'
  },
});
