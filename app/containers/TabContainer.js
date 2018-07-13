import React from 'react'
import {View, Text} from 'react-native'
import {TabBar} from 'antd-mobile-rn'
import Home from '../pages/Home'
import Search from '../pages/Search'
import Message from '../pages/Message'
import Book from '../pages/Book'
import User from '../pages/User'
export default class TabContainer extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            selected:'home'
        }
    }

    changeTab(selected){
        // const { navigate } = this.props.navigation
        // navigate('Web')
        this.setState({
            selected
        })
    }

    render(){
        return (
            <TabBar >
                <TabBar.Item  title="" key="home" onPress={()=>{this.changeTab('home')}} selected={this.state.selected==='home'} icon={require('../static/icons/home.png')} selectedIcon={require('../static/icons/home-select.png')}>
                    <Home></Home>
                </TabBar.Item>
                <TabBar.Item title="" key="search"  onPress={()=>{this.changeTab('search')}}  selected={this.state.selected==='search'} icon={require('../static/icons/search.png')} selectedIcon={require('../static/icons/search-select.png')}>
                    <Search></Search>
                </TabBar.Item>
                <TabBar.Item title="" key="message"  onPress={()=>{this.changeTab('message')}}  selected={this.state.selected==='message'} icon={require('../static/icons/message.png')} selectedIcon={require('../static/icons/message-select.png')}>
                    <Message></Message>
                </TabBar.Item>
                <TabBar.Item title="" key="book"  onPress={()=>{this.changeTab('book')}}  selected={this.state.selected==='book'} icon={require('../static/icons/book.png')} selectedIcon={require('../static/icons/book-select.png')}>
                    <Book></Book>
                </TabBar.Item>
                <TabBar.Item title="" key="user"  onPress={()=>{this.changeTab('user')}}  selected={this.state.selected==='user'} icon={require('../static/icons/user.png')} selectedIcon={require('../static/icons/user-select.png')}>
                    <User></User>
                </TabBar.Item>
            </TabBar>
        )
    }
}