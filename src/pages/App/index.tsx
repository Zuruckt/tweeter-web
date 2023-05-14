import "./index.css";

import { Navbar } from "@/components/Navbar";

export function App() {
	return (
		<div className="relative flex min-h-screen flex-col overflow-hidden bg-concrete-100">
			<Navbar></Navbar>
		</div>
	);
}
