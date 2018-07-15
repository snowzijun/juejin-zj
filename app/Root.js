import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './store/store'
import App from './containers/App'

const store = configureStore()

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