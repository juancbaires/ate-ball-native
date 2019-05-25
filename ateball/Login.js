import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { TabNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

class Login extends React.Component {
    static navigationOptions = {
        title: 'Login'
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <Button
                title="Go Home"
                onPress={() => navigate('Home', { name: 'Home' })}
            />
        )
    }
}

export default Login