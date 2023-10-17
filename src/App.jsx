import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Header, MainNav, Footer } from "./components";
import { DataProvider } from "./context/DataContext";
import { Home, Collection, TopCharts } from "./pages";

function App() {
	return (
		<Router>
			<DataProvider>
				<div className=" w-[90%] lg:w-[87%] lg:max-w-[1400px] no-scrollbar mx-auto">
					<Header />
					<main className=" lg:flex gap-5">
						<MainNav />
						<section className=" flex-1">
							<Routes>
								<Route
									element={<Home />}
									path="/"
								/>
							</Routes>
						</section>
					</main>
				</div>
				<Footer />
			</DataProvider>
		</Router>
	);
}

export default App;
