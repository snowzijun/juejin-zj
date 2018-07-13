import React, { Component } from 'react'
import { Tabs, WhiteSpace} from 'antd-mobile-rn'
import { FlatList, StyleSheet,  TouchableOpacity} from 'react-native'
import BaseItemCell from '../components/BaseItemCell'
const styles = StyleSheet.create({
    tabsStyle:{
        backgroundColor:'blue'
    },
    itemStyle:{
        width:'100%'
    }
})


export default class  extends Component {
    constructor(props){
        super(props)
    }
    //渲染FlatList每条数据
    renderItem({ item, index }) {
        return (
            <TouchableOpacity style={styles.itemStyle}>
                <BaseItemCell data={item}></BaseItemCell>
                {
                    this.props.data.dataSource.length-1===index?
                        null:
                        <WhiteSpace size="md"></WhiteSpace>
                }
            </TouchableOpacity>
            
        )
    }
    //生成FlatList每条数据的key
    keyExtractor(item, index) {
        return item.id
    }
    render() {
        return (
            <FlatList ref={el => this.listview = el}
                data={this.props.data.dataSource}
                renderItem={this.renderItem.bind(this)}
                keyExtractor={this.keyExtractor}></FlatList>
        )
    }
}