import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { router } from 'expo-router'
import { ROUTES } from '../src/routes'

const Root = () => {

    useEffect(() => {
        setTimeout(() => {
            router.push(ROUTES.SIGN_UP)
        }, 1000)
    }, [])

    return (
        <View>
            <Text>Root</Text>
        </View>
    )
}

export default Root

const styles = StyleSheet.create({})