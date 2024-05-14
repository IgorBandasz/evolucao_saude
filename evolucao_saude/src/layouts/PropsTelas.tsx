import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { RootStackParamList } from "../navigation/HomeNavigator";

type PrincipalProps = NativeStackScreenProps<RootStackParamList, 'TelaPrincipal'>;

type LoginProps = NativeStackScreenProps<RootStackParamList, 'TelaLogin'>;

type CadUsuarioProps = NativeStackScreenProps<RootStackParamList, 'TelaCadUsuario'>;

type CadNotaProps = NativeStackScreenProps<RootStackParamList, 'TelaCadNota'>;

type ConNotasProps = NativeStackScreenProps<RootStackParamList, 'TelaConNotas'>;

type AltNotaProps = NativeStackScreenProps<RootStackParamList, 'TelaAltNota'>;

export type {
  PrincipalProps,
  LoginProps,
  CadUsuarioProps,
  CadNotaProps,
  ConNotasProps,
  AltNotaProps
};
