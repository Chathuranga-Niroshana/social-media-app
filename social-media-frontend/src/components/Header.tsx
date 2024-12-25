import { StyleSheet,  TouchableOpacity, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';

type HeaderButton = {
    child: JSX.Element | null;
    onPress: () => void
}

type Props = {
    leftButton?: HeaderButton;
    rightButton?: HeaderButton;
    showLogo?: boolean;
}

const Header = (props: Props) => {
    const { leftButton, rightButton, showLogo = false } = props

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.leftButtonContainer} onPress={leftButton?.onPress}>
                {
                    leftButton?.child ||
                    leftButton?.onPress && <Ionicons name="arrow-back-circle-sharp" size={24} color="black" />
                }
            </TouchableOpacity>
            <View >
                {showLogo ? <View style={styles.logo} /> : null}
            </View>
            <View style={styles.rightButtonContainer}>
                {rightButton?.child}
            </View>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        height: 40,
        width: '100%',
        borderBottomWidth: 2,
        borderBottomColor: '#EEEEEE',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },
    leftButtonContainer: {
        height: 30,
        width: 30,
        justifyContent: 'center',
    },
    logo: {
        height: 20,
        width: 20,
        borderRadius: 10,
        backgroundColor: 'violet',
    },
    rightButtonContainer: {
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
    }
})