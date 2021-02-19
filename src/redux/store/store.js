import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { put, call, takeEvery } from 'redux-saga/effects'
import rootReducer from 'src/redux/reducers/index';
import { watchFetchImages } from 'src/redux/sagas'

const sagaMiddleware = createSagaMiddleware()

export default () => {
	const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
	sagaMiddleware.run(watchFetchImages);
	return store;
};


