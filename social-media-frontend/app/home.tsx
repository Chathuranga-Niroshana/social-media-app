import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'
import { POSTS } from '../src/data/posts'
import PostCard from '../src/components/PostCard'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollView}>
                {POSTS.map((post) => (
                    <PostCard key={post.id} post={post} />
                ))}
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
        flex: 1,
        alignItems: 'center',
    },

})