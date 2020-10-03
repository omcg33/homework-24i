import React, {Component} from "react";
import {Switch, Route}    from "react-router-dom";

import {MainPage} from "../pages/Main";

require("./styles.scss");

export class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={MainPage}/>
			</Switch>
		);
	}
}
