import React, {Component} from 'react'
import {View, Text} from 'react-native'
import {Tabs} from 'antd-mobile-rn'
import {GLOBAL_BACKGROUND_COLOR} from '../constants/Color'
import ItemList from '../components/ItemList'
const tabs = [
    {title:'首页', key:'index'},
    {title:'前端', key:'frontend'},
    {title:'后端', key:'backend'},
    {title:'ios', key:'ios'},
    {title:'Android', key:'android'},
    {title:'设计', key:'design'}
]

const testData = [
    {
        id: '1',
        author: '冯超',
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        img: 'https://zos.alipayobjects.com/rmsportal/dKbkpPXKfvZzWCM.png',
        title: 'React Native基础&入门教程：初步使用Flexbox布局',
        des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中,笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
        module: '前端'
    },
    {
        id: '2',
        author: '冯超',
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'React Native基础&入门教程：初步使用Flexbox布局 s ds d sdsdsdsdsd',
        des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
        module: '前端'
    },
    {
        id: '3',
        author: '冯超',
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        img: null,
        title: 'React Native基础&入门教程：初步使用Flexbox布局',
        des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
        module: '前端'
    },
    {
        id: '4',
        author: '冯超',
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        img: null,
        title: 'React Native基础&入门教程：初步使用Flexbox布局布局布局',
        des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
        module: '前端'
    }, {
        id: '5',
        author: '冯超',
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        img: 'https://zos.alipayobjects.com/rmsportal/XmwCzSeJiqpkuMB.png',
        title: 'React Native基础&入门教程：初步使用Flexbox布局',
        des: '在上篇中，装',
        module: '前端'
    }, {
        id: '6',
        author: '冯超',
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        img: null,
        title: 'React Native基础&入门教程：初步使用Flexbox布局',
        des: '在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
        module: '前端'
    }, {
        id: '7',
        author: '冯超',
        thumb: 'https://gw.alipayobjects.com/zos/rmsportal/MRhHctKOineMbKAZslML.jpg',
        img: null,
        title: 'React Native基础&入门教程：初步使用Flexbox布局',
        des: '在上篇中，笔者通过分享了部分安装在上篇中通过分享了部分安装在上篇中，笔者通过分享了部分安装在上篇中，笔者通过分享了部分安装',
        module: '前端'
    }]

const styles = {
    containerStyle:{
        backgroundColor:GLOBAL_BACKGROUND_COLOR,
        flex:1
    }
}

export default class Home extends Component{
    constructor(props){
        super(props)
        this.onChange =  this.onChange.bind(this)
        this.renderContent = this.renderContent.bind(this)
    }

    renderContent(tab, index){
        return <View>
            <ItemList data={{dataSource:testData}}/>
        </View>
    }

    onChange(tab, index){

    }

    render(){
        return (<View style={styles.containerStyle}>
            <Tabs onChange={this.onChange}  tabs={tabs} initialPage="index"
                tabBarPosition="top"
                tabBarInactiveTextColor="rgb(136,195,255)"
                tabBarActiveTextColor="rgb(255,255,255)"
                tabBarBackgroundColor="rgb(0,127,255)" 
                tabBarUnderlineStyle={{backgroundColor:'rgb(255,255,255)'}}>
                {this.renderContent}
            </Tabs>
        </View>)
    }
}