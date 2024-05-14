import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/HomeNavigator";

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

type CadResultadoProps = NativeStackScreenProps<RootStackParamList, 'TelaCadResultado'>;

type ConResultadosProps = NativeStackScreenProps<RootStackParamList, 'TelaConResultados'>;

type AltResultadoProps = NativeStackScreenProps<RootStackParamList, 'TelaAltResultado'>;

export type {
  PrincipalProps,
  LoginProps,
  CadUsuarioProps,
  CadResultadoProps,
  ConResultadosProps,
  AltResultadoProps
};
