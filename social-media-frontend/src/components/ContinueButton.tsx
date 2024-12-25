import { StyleSheet, TouchableOpacity, ViewStyle } from 'react-native'
import React from 'react'
import { PRIMARY } from '../utils/colors';

type Props = {
    child: JSX.Element;
    onPress: () => void;
    buttonStyles?: ViewStyle;
}

const ContinueButton = (props: Props) => {
    const { child, onPress, buttonStyles } = props;

    const localButtonStyles: ViewStyle = {
        ...styles.container,
        ...buttonStyles,
    }

    return (
        <TouchableOpacity style={localButtonStyles} onPress={onPress} >
            {child}
        </TouchableOpacity>
    )
}

export default ContinueButton

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 50,
        borderRadius: 8,
        backgroundColor: PRIMARY,
        alignItems: 'center',
        justifyContent: 'center',
    }
})