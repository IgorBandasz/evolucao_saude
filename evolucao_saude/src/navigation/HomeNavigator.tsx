import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadUsuario from "../layouts/TelaCadUsuario";
import TelaPrincipal from "../layouts/TelaPrincipal";
import { IResultadoExame } from "../models/IResultadoExame";
import TelaCadResultado from "../layouts/TelaCadResultado";

type RootStackParamList = {
    TelaLogin: undefined;
    TelaCadUsuario: undefined;
    TelaPrincipal: undefined;
    TelaCadResultado: undefined;
    TelaConResultados: undefined;
    TelaAltResultado: IResultadoExame;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{headerShown: false}}>
            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadUsuario" component={TelaCadUsuario} />
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />

            <Stack.Screen name="TelaCadResultado" component={TelaCadResultado} />
            
        </Stack.Navigator>
    );
}

export default HomeNavigator;
export type {RootStackParamList};