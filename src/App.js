import React from 'react';
import './App.css';
import {AppProvider} from "./comps/AppProvider";
import Content from "./comps/Content";
import {BrowserRouter} from "react-router-dom";

function App() {
	return (
		<div className="App">
			<BrowserRouter>
				<AppProvider bypass>
					<Content/>
				</AppProvider>
			</BrowserRouter>
		</div>
	);
}

export default App;
