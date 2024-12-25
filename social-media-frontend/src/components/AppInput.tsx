import { StyleSheet, TextInput, TextInputProps, ViewStyle } from 'react-native'
import React from 'react'
import { BORDER_LIGHT_GRAY } from '../utils/colors';

type Props = TextInputProps & {
    value: string;
    onChangeText: (value: string) => void;
    customStyles?: ViewStyle;
};

const AppInput = (props: Props) => {
    const {
        autoCorrect,
        autoCapitalize,
        value,
        onChangeText,
        customStyles,
        secureTextEntry,
    } = props

    const inputStyles: ViewStyle = {
        ...styles.input,
        ...customStyles,
    }

    return (
        <TextInput
            value={value}
            onChangeText={onChangeText}
            style={inputStyles}
            autoCorrect={autoCorrect}
            autoCapitalize={autoCapitalize}
            secureTextEntry={secureTextEntry}
        />
    )
}

export default AppInput

const styles = StyleSheet.create({
    input: {
        backgroundColor: 'white',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: BORDER_LIGHT_GRAY,
        height: 45,
        width: '100%',
        paddingHorizontal: 10,
    }
})