import React from 'react';
import './App.css';
import {AppProvider} from "./comps/AppProvider";
import Content from "./comps/Content";

function App() {
	return (
		<div className="App">
			<AppProvider bypass>
				<Content/>
			</AppProvider>
		</div>
	);
}

export default App;
