import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Pressable, Alert, Image, KeyboardAvoidingView } from 'react-native';
import { LoginProps } from "./PropsTelas";

import auth from "@react-native-firebase/auth";
import Carregamento from './Carregamento';

const TelaLogin = ({ navigation, route }: LoginProps) => {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [isCarregando, setIsCarregando] = useState(false);

    function logar() {
        if (verificaCampos()) {
            setIsCarregando(true);

            auth()
                .signInWithEmailAndPassword(email, senha)
                .then(() => { navigation.navigate('TelaPrincipal') })
                .catch((error) => tratarErros( String(error) ))
                .finally(() => setIsCarregando(false))
        }
    }

    function verificaCampos(){
        let resultado = true;
        
        if (email == ''){
            Alert.alert("Email em branco", "Digite um email")
            return false;
        }
        if (senha == ''){
            Alert.alert("Senha em branco", "Digite uma senha")
            return false;
        }

        return resultado;
    }

    function tratarErros(erro: string){
        console.log(erro);
        if(erro.includes("[auth/invalid-email]")){
            Alert.alert("Email inválido", "Digite um email válido")
        } else if(erro.includes("[ INVALID_LOGIN_CREDENTIALS ]")){
            Alert.alert("Login ou senha incorretos", "")
        } else{
            Alert.alert("Erro", erro)
        }
    }

    function redefinirSenha() {
        if (email == ''){
            Alert.alert("Email em branco", "Preencha o email")
            return
        }
        auth()
            .sendPasswordResetEmail(email)
            .then(() => Alert.alert("Redefinir senha", "Enviamos um email para você"))
            .catch((error) => console.log(error))
    }

    return (
        <KeyboardAvoidingView style={styles.container} behavior='height'>
            <Carregamento isCarregando={isCarregando} />
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Image style={styles.imagem} source={{ uri: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png' }} />
            </View>

            <View style={styles.container_login}>
                <Text
                    style={styles.titulo_caixa_texto}>Login</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setEmail(text) }} />
                <Text
                    style={styles.titulo_caixa_texto}>Senha</Text>
                <TextInput
                    style={styles.caixa_texto}
                    onChangeText={(text) => { setSenha(text) }} />
                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() => logar()}
                    disabled={isCarregando}>
                    <Text style={styles.desc_botao}>Entrar</Text>
                </Pressable>
            </View>

            <View style={styles.container_botoes}>
                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={() => { navigation.navigate('TelaCadUsuario') }}>
                    <Text style={styles.desc_botao}>Cadastrar-se</Text>
                </Pressable>

                <Pressable
                    style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                    onPress={redefinirSenha}>
                    <Text style={styles.desc_botao}>Esqueci a senha</Text>
                </Pressable>
            </View>
        </KeyboardAvoidingView>
    );
}

export default TelaLogin;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFACD'
    },
    container_login: {
        flex: 2,
        //  justifyContent: 'center',
        alignItems: 'center'
    },
    container_botoes: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    titulo_caixa_texto:{
        fontSize: 25,
        color: 'black'
    },
    caixa_texto: {
        width: '70%',
        color: 'black',
        borderWidth: 1,
        borderRadius: 4,
        margin: 3,
        backgroundColor: 'white'
    },
    botao: {
        justifyContent: 'center',
        backgroundColor: 'green',
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
        marginTop: 15,
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    },
    imagem: { width: 200, height: 200, resizeMode: "center" }
});
