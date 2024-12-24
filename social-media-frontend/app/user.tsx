import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../src/store'
import { router } from 'expo-router'

const user = () => {

    const currentUser = useAppSelector(state => state.currentUser)
    const goBack = () => {
        router.back()
    }
    return (
        <SafeAreaView>
            <TouchableOpacity onPress={goBack}>
                <Text> go back </Text>
            </TouchableOpacity>
            <Text>User Details Page</Text>
            <Text>{currentUser.username} </Text>
            <Text>{currentUser.firstName} {currentUser.lastName} </Text>
        </SafeAreaView>
    )
}

export default user

const styles = StyleSheet.create({})