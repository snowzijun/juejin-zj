import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import App from './containers/App'

const store = configureStore()

/**
 * store数据结构
 * {
 *   home:{
 *      articleList:{
 *          typeId1:[],
 *          typeId2:[]
 *       }
 *   }
 * }
 */

/**
 * 待添加redux方面的内容
 */
export default class Root extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <Provider store={store}>
                <App></App>
            </Provider>
        )
    }
}