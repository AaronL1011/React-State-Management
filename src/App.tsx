import NavLayout from "./components/templates/NavLayout";
import Routes from "./routing";

function App() {
	return <NavLayout content={<Routes />} />;
}

export default App;
