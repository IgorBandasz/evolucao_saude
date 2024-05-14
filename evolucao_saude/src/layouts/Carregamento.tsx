import { StyleSheet, View, Modal, ActivityIndicator } from "react-native";
import React from 'react';

type CarregamentoProps = {
    isCarregando: boolean;
}

const Carregamento = (props: CarregamentoProps) => {
    return (
        <Modal
            visible={props.isCarregando}
            transparent={false}>
            <View style={styles.container}>
                <ActivityIndicator size="large" />
            </View>
        </Modal>
    );
}
export default Carregamento;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
