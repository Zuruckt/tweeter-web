import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { App } from "./pages/App";
import { RouteObject, RouterProvider, createBrowserRouter } from "react-router-dom";

const routes: RouteObject[] = [
	{
		path: "/",
		element: <App />,
	},
];
const router = createBrowserRouter(routes);
const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
