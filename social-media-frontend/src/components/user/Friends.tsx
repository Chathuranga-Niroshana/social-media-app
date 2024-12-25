import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

type Props = {
    isActive: boolean;
}

const Friends = (props: Props) => {
    const { isActive } = props

    if (!isActive) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            <Text>Friends</Text>
        </ScrollView>
    )
}

export default Friends

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center',
    },
})