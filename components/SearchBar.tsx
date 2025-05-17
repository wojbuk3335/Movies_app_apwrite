import {View, TextInput, StyleSheet, Text, Image} from 'react-native';
import React from 'react';

interface Props {
    onPress?: () => void;
    placeholder: string;
}


const SearchBar = ({ onPress, placeholder}: Props) => {
    return (
        <View className="flex-row items-center justify-center bg-white rounded-full px-4 py-2 shadow-md">
            <Image
                source={require('../assets/icons/search.png')}
                className="w-5 h-5 mr-2"
                resizeMode='contain'
                tintColor={'#000'}
            />
            <TextInput
                placeholder={placeholder}
                placeholderTextColor="#888"
                className="flex-1 text-base text-black"
                onPress={onPress}
                value=""
            />
        </View>
    );
};

export default SearchBar;
