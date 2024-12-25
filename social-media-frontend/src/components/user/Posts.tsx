import { ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useMemo } from 'react'
import PostCard from '../PostCard'
import Spacing from '../Spacing'
import { useAppSelector } from '../../store'

type Props = {
    isActive: boolean;
}

const Posts = (props: Props) => {
    const { isActive } = props;
    const currentUser = useAppSelector(state => state.currentUser)
    const posts = useAppSelector(state => state.posts)

    const postsForUser = useMemo(() => {
        return Object.values(posts).filter((post) => post.user === currentUser.id).sort((a, b) => b.createdDate - a.createdDate)
    }, [])

    if (!isActive) {
        return null;
    }

    return (
        <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
            {postsForUser.map((post) => (
                <PostCard key={post.id} post={post} />
            ))}
            <Spacing vertical={50} />
        </ScrollView>
    )
}

export default Posts

const styles = StyleSheet.create({
    scrollView: {
        alignItems: 'center',
    },
})