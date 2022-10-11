import { useState } from "react";
import CardContainer from "./components/card-container";
import Layout from "./components/layout";
import PriceDescription from "./components/price-description";

function App() {
	const [temporary, setTemporary] = useState("month");

	return (
		<Layout>
			<PriceDescription
				setTemporary={setTemporary}
				temporary={temporary}
			/>
			<CardContainer temporary={temporary} />
		</Layout>
	);
}

export default App;
