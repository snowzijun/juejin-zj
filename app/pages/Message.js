import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Tabs} from 'antd-mobile-rn'
export default class Home extends Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={{flex:1}}>
                <Text>Message</Text>
            </View>
        )
    }
}