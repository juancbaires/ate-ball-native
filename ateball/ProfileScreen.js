import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'

class ProfileScreen extends React.Component {
    static navigationOptions = {
        title: 'My Profile'
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

export default ProfileScreen