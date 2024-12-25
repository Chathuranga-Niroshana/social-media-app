import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import PostCard from '../src/components/PostCard'
import Spacing from '../src/components/Spacing'
import Header from '../src/components/Header'
import { useAppSelector } from '../src/store'
import { useMemo } from 'react'

const Home = () => {

    const posts = useAppSelector(state => state.posts)

    const postToShow = useMemo(() => {
        return Object.values(posts).sort((a, b) => b.createdDate - a.createdDate)
    }, [])

    return (
        <SafeAreaView style={styles.container}>

            <Header showLogo />

            <ScrollView contentContainerStyle={styles.scrollView} showsVerticalScrollIndicator={false}>
                {postToShow.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}

                <Spacing vertical={50} />
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollView: {
        alignItems: 'center',
    },

})