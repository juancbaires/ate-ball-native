import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class HomeScreen extends React.Component {
    static navigationOptions = {
        title: 'AteBall',
    };
    render() {
        const { navigate } = this.props.navigation;
        return (
            <Button
                title="Go to Juan's profile"
                onPress={() => navigate('Profile', { name: 'Home' })}
            />
        );
    }
}

export default HomeScreen