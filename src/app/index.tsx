import React, {Component} from "react";
import {Switch, Route}    from "react-router-dom";

import {MainPage} from "../pages/Main";
import {MoviePage} from "../pages/Movie";

require("./styles/global.scss");

export class App extends Component {
	render() {
		return (
			<Switch>
				<Route exact path="/" component={MainPage}/>
				<Route exact path="/movies/:id" component={MoviePage}/>
			</Switch>
		);
	}
}
