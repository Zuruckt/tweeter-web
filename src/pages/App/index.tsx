import "./index.css";

import { Navbar } from "@/components/Navbar";

export function App() {
	return (
		<div className="relative flex min-h-screen flex-col overflow-hidden bg-gray-100 py-6 sm:py-12">
			<Navbar></Navbar>
		</div>
	);
}
