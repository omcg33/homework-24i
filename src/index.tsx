import React                                   from "react";
import ReactDOM                                from "react-dom";
import {createStore, compose, applyMiddleware} from "redux";
import {Provider}                              from "react-redux";
import {composeWithDevTools}                   from "redux-devtools-extension";
import createSagaMiddleware                    from "redux-saga";
import {Router}                         from "react-router-dom";

import history from './helpers/history'

import App              from "./app";
import {rootSaga}         from "./app/sagas";
import {rootReducer}      from "./app/reducers";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, compose(applyMiddleware(sagaMiddleware), composeWithDevTools()));

sagaMiddleware.run(rootSaga);

ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<Router history={history}>
				<App/>
			</Router>
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
