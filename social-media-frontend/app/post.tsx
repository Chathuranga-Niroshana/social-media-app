import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Post } from '../src/model/post'
import { useAppDispatch, useAppSelector } from '../src/store'
import { router } from 'expo-router'
import { USERS } from '../src/data/users'
import { CurrentUserActions } from '../src/store/features/currentUser'
import { ROUTES } from '../src/routes'




const PostDetailPage = () => {
    const dispatch = useAppDispatch()
    const currentPost = useAppSelector(state => state.currentPost)
    const userInfo = USERS.find(user => user.id === currentPost.user)

    const goBack = () => {
        router.back()
    }

    const goToUserPage = () => {
        dispatch(CurrentUserActions.setCurrentUser(userInfo))
        router.push(ROUTES.USER)
    }

    return (
        <SafeAreaView>
            <TouchableOpacity onPress={goBack}>
                <Text>go back</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={goToUserPage}>
                <Text>{userInfo?.username}</Text>
            </TouchableOpacity>
            <Text>Post Details Page</Text>
            <Text>{currentPost.text}</Text>

        </SafeAreaView>
    )
}

export default PostDetailPage

const styles = StyleSheet.create({})