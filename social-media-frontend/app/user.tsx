import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { useAppSelector } from '../src/store'
import { router } from 'expo-router'
import Header from '../src/components/Header'
import { SafeAreaView } from 'react-native-safe-area-context'
import UserInfo from '../src/components/user/UserInfo'
import { useState } from 'react'
import { BORDER_LIGHT_GRAY } from '../src/utils/colors'
import Posts from '../src/components/user/Posts'
import Friends from '../src/components/user/Friends'

type TABS = 'Posts' | 'Friends' | 'Comments'

const user = () => {
    const currentUser = useAppSelector(state => state.currentUser)
    const [activeTab, setActiveTab] = useState<TABS>('Posts');

    const goBack = () => {
        router.back()
    }

    const onTabPress = (tab: TABS) => {
        setActiveTab(tab)
    }

    return (
        <SafeAreaView style={styles.safeAreaView} edges={['top']}>
            <Header
                leftButton={{
                    onPress: goBack,
                    child: null
                }}
                showLogo
            />

            <View style={styles.main}>
                {/* user info */}
                <UserInfo user={currentUser} />

                {/* tabs */}
                <Tabs onTabPress={onTabPress} />

                <Posts isActive={activeTab === 'Posts'} />
                <Friends isActive={activeTab === 'Friends'} />

            </View>
        </SafeAreaView>
    )
}

export default user

type TabsProps = {
    onTabPress: (tab: TABS) => void;
}

const Tabs = (props: TabsProps) => {
    const { onTabPress } = props;

    const [activeTab, setActiveTab] = useState<TABS>('Posts');

    const onPostsPress = () => {
        setActiveTab('Posts')
        onTabPress('Posts')
    }

    const onFriendsPress = () => {
        setActiveTab('Friends')
        onTabPress('Friends')
    }


    return (
        <View style={styles.tabContainer}>
            <TouchableOpacity style={[styles.tabColumn, activeTab === 'Posts' ? styles.selectedColumn : {}]} onPress={onPostsPress}>
                <Text>Posts</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[styles.tabColumn, activeTab === 'Friends' ? styles.selectedColumn : {}]} onPress={onFriendsPress}>
                <Text>Friends</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    safeAreaView: {
        flex: 1,
    },
    main: {
        flex: 1,
        paddingTop: 10,
    },
    tabContainer: {
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderColor: BORDER_LIGHT_GRAY
    },
    tabColumn: {
        width: '50%',
        justifyContent: 'center',
        alignItems: 'center',
        height: 50,
    },
    selectedColumn: {
        borderColor: 'black',
        borderBottomWidth: 1,
    }

})