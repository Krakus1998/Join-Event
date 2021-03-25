import React from 'react';
import { StyleSheet, View, Text, ScrollView, Image, TouchableOpacity } from 'react-native';

export default function Test() {
    return (
        <View style={styles.container}>
            <TouchableOpacity>
                <Text>Event dotyczący czegoś</Text>
                <Image
                    style={styles.tinyLogo}
                    source={{
                        uri: 'https://reactnative.dev/img/tiny_logo.png',
                    }}
                />

            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: 150,
        width: 120,
        marginLeft: 15
    },
    titleText: {
        fontFamily: 'BlackOpsOne-Regular',
        fontSize: 18,
    },
    header: {
        fontFamily: 'Audiowide-Regular',
        fontSize: 15,
        color: '#ffa200',
        marginTop: 20,
    },
    tinyLogo: {
        width: 120,
        height: 120,
    },
});