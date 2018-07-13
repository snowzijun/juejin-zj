
import React, {Component} from 'react'
import { StyleSheet,  View} from 'react-native'
import { StackNavigator } from 'react-navigation'
import TabContainer from './TabContainer'
import WebViewContainer from './WebViewContainer'

const Navigator = StackNavigator({
    Home:{
        screen:TabContainer,
        navigationOptions:{
            header:null
        }
    },
    Web:{
        screen:WebViewContainer
    }
}, {
    initialRouteName:'Home',
    headerMode:'screen',
    headerTintColor:'#fff',
    mode:'card'
})



export default class App extends Component{
    render() {
        return  <Navigator></Navigator>
    }
}