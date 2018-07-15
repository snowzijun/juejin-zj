import {createStore, applyMiddleware} from 'redux'
import createSagaMiddleware, { END } from 'redux-saga'
import {logger} from 'redux-logger'

import reducers from '../reducers/index'
//中间件
const middlewares = []
//新增一个saga中间件
const sagaMiddleware = createSagaMiddleware()
middlewares.push(sagaMiddleware)
//如果是开发模式
if(__DEV__){
    middlewares.push(logger)
}

const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)


export default function configureStore(initialState){

    const store = createSagaMiddleware(reducers, initialState)
    //初始化saga run
    store.runSaga = sagaMiddleware.run
    store.close = ()=>store.dispatch(END)
    return store
}