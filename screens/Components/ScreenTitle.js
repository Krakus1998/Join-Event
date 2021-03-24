import React from 'react';
import { StyleSheet, View, Text, TouchableWithoutFeedback } from 'react-native';
import { Icon } from 'react-native-elements';

export default function ScreenTitle() {
    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <Icon
                    name='menu'
                    type='icon'
                    size={35}
                    color='#f50'
                    onPress={() => console.log('')} />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.titleText}>Join Event</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'black',
        flex: 0, flexDirection: 'row',
        marginTop: 35,
        fontSize: 35,

    },
    iconContainer: {
        justifyContent: 'center',
        width: '10%',
        alignItems: 'center',
    },
    titleContainer: {
        width: '90%',
        alignItems: 'center',
    },
    titleText: {
        fontFamily: 'Audiowide-Regular',
        fontSize: 35,
        color: '#ffa200',
        textAlign: "center",
        marginLeft: '-10%',
    }
});