import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducer/index';
import logger from 'redux-logger'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import createFilter from 'redux-persist-transform-filter';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2'


const initialState = {};
const saveSubsetFilter = createFilter('lists', ['todo']);


const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['lists'],
    transforms: [saveSubsetFilter],
    stateReconciler: autoMergeLevel2,

}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export default () => {
    let store = createStore(persistedReducer, initialState, applyMiddleware(logger))
    let persistor = persistStore(store)
    return { store, persistor }
}


