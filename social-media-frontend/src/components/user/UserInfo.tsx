import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { User } from '../../model/user'

type Props = {
    user: User;
}

const UserInfo = (props: Props) => {
    const { user } = props;
    return (
        <View style={styles.topInfo}>
            {/* photo column */}
            <View style={styles.imageColumn} >
                <View style={styles.photo} />
            </View>
            {/* user info column */}
            <View style={styles.userInfoColumn}>
                <Text style={styles.name}>{user.name} </Text>
                <Text style={styles.username}>@{user.username}</Text>
                <Text style={styles.bio}>{user.bio} </Text>
            </View>
        </View>
    )
}

export default UserInfo


const styles = StyleSheet.create({
    topInfo: {
        height: 100,
        flexDirection: 'row',
    },
    imageColumn: {
        height: '100%',
        width: '25%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    userInfoColumn: {
        height: '100%',
        width: '75%',
        justifyContent: 'center',
    },
    photo: {
        height: 80,
        width: 80,
        borderRadius: 40,
        backgroundColor: 'blue',
    },
    name: {
        fontWeight: '500',
        fontSize: 20
    },
    username: {
        fontWeight: '400',
        fontSize: 16,
        fontStyle: 'italic'
    },
    bio: {
        fontWeight: '300',
        fontSize: 13,
        marginTop: 5
    },
});

