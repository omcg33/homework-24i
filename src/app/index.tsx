import React, {Component} from "react";
import {withRouter}       from "react-router";
import {Switch, Route}    from "react-router-dom";

import {ErrorHandler} from "../components/ErrorHandler";

import {MainPage}   from "../pages/Main";
import {SearchPage} from "../pages/Search";
import {MoviePage}  from "../pages/Movie";
import {TvShowPage} from "../pages/TvShow";
import {Page404}    from "../pages/errors/404";
import {Page500}    from "../pages/errors/500";

require("./styles/global.scss");

class App extends Component {
	render() {
		return (
			<ErrorHandler
				Page404={Page404}
				Page500={Page500}
			>
				<Switch>
					<Route exact path="/" component={MainPage}/>
					<Route exact path="/search" component={SearchPage}/>
					<Route exact path="/movies/:id" component={MoviePage}/>
					<Route exact path="/tv/:id" component={TvShowPage}/>
					<Route component={Page404}/>
				</Switch>
			</ErrorHandler>
		);
	}
}

export default withRouter(App);
