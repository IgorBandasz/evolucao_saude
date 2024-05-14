import { useState } from "react";
import { Alert, Pressable, StyleSheet, Text, TextInput, View } from "react-native";

import { CadResultadoProps } from "./PropsTelas";
import Carregamento from "./Carregamento";
import { IResultadoExame } from "../models/IResultadoExame";

const TelaCadResultado = ({ navigation, route }: CadResultadoProps) => {
    const [data, setData] = useState(Date());
    const [laboratorio, setLaboratorio] = useState('');
    const [exames, setExames] = useState([] as Array<IResultadoExame>);
    const [isCarregando, setIsCarregando] = useState(false);

    async function cadastrar() {
        setIsCarregando(true);

        if (verificaCampos()) {
            
            //Cadastra
        } 
        
        setIsCarregando(false);
    }

    function verificaCampos(){
        let resultado = true;
        
        //Verificar preenchimento dos campos

        return resultado;
    }

    function tratarErros(erro: string){
        console.log(erro);
        if(erro.includes("[auth/invalid-email]")){
            Alert.alert("Email inválido", "Digite um email válido")
        } else if(erro.includes("[auth/weak-password]")){
            Alert.alert("Senha Fraca", "A senha digitada é fraca. A senha deve conter pelo menos 6 dígitos.")
        } else if(erro.includes("[auth/email-already-in-use]")){
            Alert.alert("Email em uso", "O email inserido já foi cadastrado em outra conta.")
        }else{
            Alert.alert("Erro", erro)
        }
    }

    return (
        <View 
            style={styles.container}>
            <Carregamento isCarregando={isCarregando} />

            <Text
                style={styles.titulo}>Resultado de Exames</Text>

            <Text
                style={styles.titulo_campos}>Data de realização do exame</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setData(text) }} />

            <Text
                style={styles.titulo_campos}>Laboratório</Text>
            <TextInput
                style={styles.caixa_texto}
                onChangeText={(text) => { setLaboratorio(text) }} />


            {//Lista de Itens do resultado
            }

            <Pressable
                style={(state) => [styles.botao, state.pressed ? { opacity: 0.5 } : null] }
                onPress={() => cadastrar()}
                disabled={isCarregando}>
                <Text style={styles.desc_botao}>Gravar</Text>
            </Pressable>
        </View>
    );
}

export default TelaCadResultado;

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
    titulo_campos: {
        fontSize: 20,
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
        marginTop: 15,
        borderRadius: 10
    },
    desc_botao: {
        fontSize: 20,
        color: 'white'
    }
});
