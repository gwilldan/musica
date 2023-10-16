import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Display, Header, Collection, Nav, NewRelease } from "./components";
import { DataProvider } from "./context/DataContext";

function App() {
	return (
		<Router>
			<DataProvider>
				<main className=" px-6 lg:px-[100px]">
					<Header />
					<Display />
					<Routes>
						<Route
							element={<Collection />}
							path="/collection"
						/>
					</Routes>
				</main>
			</DataProvider>
		</Router>
	);
}

export default App;
