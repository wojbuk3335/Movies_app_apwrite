import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

type Props = {};

const MovieDetails: React.FC<Props> = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Movie Details</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
});

export default MovieDetails;