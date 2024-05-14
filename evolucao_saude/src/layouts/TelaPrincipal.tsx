import React from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PrincipalProps } from './PropsTelas';

const TelaPrincipal = ({ navigation, route }: PrincipalProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Tela Inicial</Text>

      <Pressable
          style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
          onPress={() => navigation.navigate('TelaCadResultado')}>
          <Text style={styles.desc_botao}>Cadastrar</Text>
      </Pressable>

    </View>
  );
}

export default TelaPrincipal;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#FFFACD'
  },
  titulo: {
      fontSize: 30,
      fontWeight: 'bold',
      margin: 30,
      color: 'black'
  },
  botao: {
    justifyContent: 'center',
    backgroundColor: 'green',
    paddingVertical: 10,
    paddingHorizontal: 30,
    marginTop: 15,
    borderRadius: 10
  },
  desc_botao: {
      fontSize: 20,
      color: 'white'
  }
});
