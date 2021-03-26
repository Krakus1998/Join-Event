import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';

export default function filter() {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.filtry}>
                <MaterialIcons style={{ marginLeft: 10 }} name='sort' size={25} /><Text>Filtry</Text>
            </TouchableOpacity>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#1f1f1f',
        height: 30,
        flexDirection: 'row-reverse',
        
    },
    filtry:{
        backgroundColor: '#1f1f1f',
        height: 30,
        flexDirection: 'row-reverse',
        marginLeft: 15,
    }
})