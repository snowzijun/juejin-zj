import React, { Component } from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import { Icon} from 'antd-mobile-rn'

const styles = StyleSheet.create({
    textStyle:{
        
    }
})

/**
 * 用于显示文章列表下部收藏 评论等图标
 */
export default class ItemCellIcon extends Component{
    constructor(props){
        super(props)
        this.state = {}
        this.onPress = this.onPress.bind(this)
    }

    static defaultProps = {
        //对应的图标，iconfont
        icon:'',
        //对应显示的文字
        text:'',
        //文字与图标的大小
        size:10,
        //点击图标事件
        onPressIcon:()=>{}
    }

    onPress(){
        //触发点击图标事件
        this.props.onPressIcon()
    }
    render(){
        const props = this.props
        return (
            <TouchableOpacity style={{paddingLeft:5, paddingRight:5, borderRadius:8}} onPress={this.onPress} >
                <View style={{ flexDirection: 'row', alignItems:'center'}}>
                    <Icon type={props.icon} size={12} color="#ddd"></Icon>
                    <Text> </Text>
                    <Text style={[styles.textStyle, {fontSize:props.size}]}>{props.text}</Text>
                </View>
            </TouchableOpacity>
        )
    }
}