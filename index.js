import React from 'react';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import createStore from 'src/redux/store/store.js';
import App from 'src/screens/AppContainer.js';
import {name as appName} from 'src/res/app.json';

const store = createStore();

const Root = () => (
	<Provider store={store}>
		<App />
	</Provider>
)

AppRegistry.registerComponent(appName, () => Root);