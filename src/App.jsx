import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Display, Header, MainNav, NewRelease } from "./components";
import { DataProvider } from "./context/DataContext";
import { Home, Collection, TopCharts } from "./pages";

function App() {
	return (
		<Router>
			<DataProvider>
				<div className=" px-6 lg:px-[100px]">
					<Header />
					<main className=" lg:flex gap-5">
						<MainNav />
						<section className=" flex-1">
							<Routes>
								{/* <Display /> */}
								<Route
									element={<Home />}
									path="/"
								/>
							</Routes>
						</section>
					</main>
				</div>
			</DataProvider>
		</Router>
	);
}

export default App;
