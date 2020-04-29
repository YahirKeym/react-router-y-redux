import React from "react";
import { BrowserRouter, Switch, Route} from "react-router-dom";
import Todo from './Components/Todo.js';

/**
 * 
 */
export default function App() {
  	return (
    	<BrowserRouter>
			<Switch>
				<Route path="/">
					<Todo />
				</Route>
			</Switch>
    	</BrowserRouter>
  );
}