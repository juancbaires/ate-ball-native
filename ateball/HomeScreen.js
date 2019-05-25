import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";
import Icon from 'react-native-vector-icons/Ionicons';
import { createAppContainer } from 'react-navigation';
import { linearGradient } from 'expo'

const styleEightball = StyleSheet.create({
    black: {
        backgroundColor: 'linear-gradient(top, rgba(76, 76, 76, 1) 0%, rgba(89, 89, 89, 1) 12%, rgba(102, 102, 102, 1) 25%, rgba(71, 71, 71, 1) 39%, rgba(44, 44, 44, 1) 50%, rgba(17, 17, 17, 1) 60%, rgba(43, 43, 43, 1) 76%, rgba(28, 28, 28, 1) 91%, rgba(19, 19, 19, 1) 100%)',
        height: 400,
        width: 400,
        borderRadius: 200,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    white: {
        backgroundColor: 'black',
        zIndex: 2,
        borderRadius: 102,
        height: 205,
        width: 205,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    blue: {
        position: 'relative',
        width: 152,
        height: 152,
        zIndex: 25,
        backgroundColor: 'blue',
        borderRadius: 75,
        alignItems: 'center',
    }
})

class HomeScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Home Screen</Text>
            </View>
        );
    }
}
class ProfileScreen extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>Profile Screen</Text>
            </View>
        );
    }
}
class UpdateFoods extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <Text>UpdateFoods Screen</Text>
            </View>
        );
    }
}
class CartScreen extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, backgroundColor: "#444F71" }} style={styles.container}>
                <View style={styleEightball.black}>
                    <View style={styleEightball.white} >
                        <View style={styleEightball.blue}><Text style={{ color: 'white', flex: 1, justifyContent: 'center', alignSelf: 'center', alignItems: 'center' }}>Hello</Text></View>
                    </View>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});
const TabNavigator = createMaterialBottomTabNavigator(
    {
        Home: {
            screen: HomeScreen,
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-home'} />
                    </View>),
            }
        },
        Profile: {
            screen: ProfileScreen,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-person'} />
                    </View>),
                activeColor: '#f60c0d',
                inactiveColor: '#f65a22',
                barStyle: { backgroundColor: '#f69b31' },
            }
        },
        Image: {
            screen: UpdateFoods,
            navigationOptions: {
                tabBarLabel: 'History',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-pizza'} />
                    </View>),
                activeColor: '#615af6',
                inactiveColor: '#46f6d7',
                barStyle: { backgroundColor: '#67baf6' },
            }
        },
        Cart: {
            screen: CartScreen,
            navigationOptions: {
                tabBarLabel: 'Ateball',
                tabBarIcon: ({ tintColor }) => (
                    <View>
                        <Icon style={[{ color: tintColor }]} size={25} name={'ios-radio-button-on'} />
                    </View>),
            }
        },
    },
    {
        initialRouteName: "Home",
        activeColor: '#f0edf6',
        inactiveColor: '#226557',
        barStyle: { backgroundColor: '#3BAD87' },
    },
);

export default createAppContainer(TabNavigator)