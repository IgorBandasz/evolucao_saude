import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TelaLogin from "../layouts/TelaLogin";
import TelaCadUsuario from "../layouts/TelaCadUsuario";
import TelaPrincipal from "../layouts/TelaPrincipal";

type RootStackParamList = {
    TelaLogin: undefined;
    TelaPrincipal: undefined;
    TelaCadUsuario: undefined;
    TelaCadNota: undefined;
    TelaConNotas: undefined;
    TelaAltNota: {id: string; palavra: string};
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const HomeNavigator = () => {
    return (
        <Stack.Navigator initialRouteName="TelaLogin" screenOptions={{headerShown: false}}>
            <Stack.Screen name="TelaLogin" component={TelaLogin} />
            <Stack.Screen name="TelaCadUsuario" component={TelaCadUsuario} />
            <Stack.Screen name="TelaPrincipal" component={TelaPrincipal} />
            
        </Stack.Navigator>
    );
}

export default HomeNavigator;
export type {RootStackParamList};