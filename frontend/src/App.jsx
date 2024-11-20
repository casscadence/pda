import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import HomePage from "./pages/HomePage.jsx";
import FacebookPage from "./pages/FacebookPage.jsx";
import CallOfDutyPage from "./pages/CallOfDutyPage.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path='/' element={<HomePage />} />
				<Route path='/facebook' element={<FacebookPage />} />
				<Route path='/call-of-duty/' element={<CallOfDutyPage />} />
			</Routes>
		</>
	);
}

export default App;
