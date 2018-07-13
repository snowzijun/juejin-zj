import React, {Component} from 'react'
import {StyleSheet, WebView} from 'react-native'
import {SafeAreaView} from 'react-navigation'

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column',
        backgroundColor:'#fff'   
    },
    webview:{
        flex:1
    }
})

/**
 * 打开网页,
 * 网页地址为 {
 *   web:{
 *   url
 * }
 * }
 */
export default class WebViewContainer extends Component {

    static navigationOptions = ({navigation})=>({
        title:'测试标题',
        headerTitle:'测试'
    })

    constructor(props){
        super(props)
    }

    onNavigationStateChange(navState){
       
    }
    render() {
        const {params} = this.props.navigation.state
        return (
            <SafeAreaView style={styles.container}>
                
                <WebView style={styles.webview} 
                    ref={(el)=>this.webview=el}
                    source={{uri:'https://www.jianshu.com/c/60f8a7f5e8e2'}}
                    javaScriptEnabled
                    domStorageEnabled
                    startInLoadingState 
                    scalesPageToFit 
                    decelerationRate="normal"
                    onShouldStartLoadWithRequest={()=>true}
                    onNavigationStateChange={this.onNavigationStateChange.bind(this)}
                >
 
                </WebView>
            </SafeAreaView>
        )
    }
}