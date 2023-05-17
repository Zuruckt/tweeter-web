import { ContentWrapper } from "@/components/ContentWrapper";
import "./index.css";

import { Navbar } from "@/components/Navbar";
import { Outlet } from "react-router-dom";

export function App() {
	return (
		<div className="relative flex min-h-screen flex-col overflow-hidden bg-concrete-100">
			<Navbar />
			<ContentWrapper>
				<Outlet />
			</ContentWrapper>
		</div>
	);
}
