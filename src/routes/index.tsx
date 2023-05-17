import { App } from "@/pages/App";
import { Bookmarks } from "@/pages/Bookmarks";
import { Explore } from "@/pages/Explore";
import { Home } from "@/pages/Home";
import { Route, createRoutesFromElements } from "react-router-dom";

export const routes = createRoutesFromElements(
	<Route element={<App />}>
		<Route path="/" element={<Home />}></Route>
		<Route path="/explore" element={<Explore />}></Route>
		<Route path="/bookmarks" element={<Bookmarks />}></Route>
	</Route>
);
