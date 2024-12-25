import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    vertical?: number;
    horizontal?: number;
}

const Spacing = (props: Props) => {
    const { vertical, horizontal } = props
    return (
        <View style={{ marginVertical: vertical, marginHorizontal: horizontal, }} />
    )
}

export default Spacing

const styles = StyleSheet.create({})