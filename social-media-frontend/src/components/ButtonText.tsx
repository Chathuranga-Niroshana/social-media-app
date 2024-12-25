import { StyleSheet, Text, } from 'react-native'
import React from 'react'


type Props = {
    text: string
}

const ButtonText = (props: Props) => {
    const { text } = props
    return (
        <Text style={styles.label}>{text}</Text>
    )
}


export default ButtonText

const styles = StyleSheet.create({
    label: {
        fontSize: 18,
        fontWeight: '600',
        color: 'white'
    }
})