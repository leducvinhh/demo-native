import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

export default function ButtonAction({ action, length }: any) {
    const handleClick = (action: any) => {
        alert(action.nameAction)
    }
    return (
            <TouchableOpacity activeOpacity={0.7} style={action.id < length ? styles.button : styles.buttonLast} onPress={() => handleClick(action)}>
                <Text style={styles.buttonText} key={action.id}>{action.nameAction}</Text>
            </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    button: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: 0,
        height: '100%',
        backgroundColor: '#A2A2A2',
        borderRadius: 3,
        marginRight: 5,
        borderBottomColor: '#00000077',
        borderBottomWidth: 3,
    },
    buttonLast: {
        display: 'flex',
        flexGrow: 1,
        flexShrink: 1,
        flexBasis: 0,
        width: 0,
        height: '100%',
        backgroundColor: '#A2A2A2',
        borderRadius: 3,
        marginRight: 0,
        borderBottomColor: '#00000077',
        borderBottomWidth: 3,
    },
    buttonText: {
        textAlign: 'center',
        lineHeight: 65,
        height: '100%',
        color: '#FFF',
    }
})