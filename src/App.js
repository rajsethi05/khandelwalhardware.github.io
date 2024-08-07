// Filename - App.js
import React from "react";
import Bathtubs from "./pages/bath_tubs";
import {
	HashRouter,
	Routes,
	Route,
} from "react-router-dom";
import Home from "./pages";

function App() {
	return (
		<HashRouter>
			<Routes>
				<Route exact path="/" element={<Home />} />
				<Route exact path="/products" element={<Bathtubs />} />
			</Routes>
		</HashRouter>
	);
}

export default App;
