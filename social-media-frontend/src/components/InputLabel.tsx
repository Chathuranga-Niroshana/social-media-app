import { StyleSheet, Text } from 'react-native'
import React from 'react'

type Props = {
    text: string
}

const InputLabel = (props: Props) => {
    const { text } = props
    return (
        <Text style={styles.label}>{text}</Text>
    )
}

export default InputLabel

const styles = StyleSheet.create({
    label: {
        fontSize: 16,
        fontWeight: '600',
    }
})