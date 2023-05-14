import { NavLink } from "react-router-dom";
import classnames from "clsx";
import Tweeter from "@/assets/svg/tweeter.svg";
import Manoel from "@/assets/images/Manoel-Gomes.jpg";
import { useRef } from "react";

type IsActiveHandlerParams = {
	isActive: boolean;
};

export function Navbar() {
	const isActiveHandler = ({ isActive }: IsActiveHandlerParams) =>
		classnames("font-poppins font-medium ", {
			"text-concrete-800": !isActive,
			"text-blue-600": isActive,
		});
	return (
		<div className="bg-white p-6 flex justify-between items-center">
			<div className="flex-1">
				<img src={Tweeter} alt="tweeter-logo" width={200} className="flex-1"></img>
			</div>
			<nav className="flex-1 self-center flex justify-evenly">
				<NavLink className={isActiveHandler} to="/">
					{({ isActive }: IsActiveHandlerParams) => {
						return isActive ? (
							<span className="flex flex-col text-center absolute">
								Ativo
								<span className="relative bottom-0 text-red-900 bg-orange-800"></span>
							</span>
						) : (
							<span>Inativo</span>
						);
					}}
				</NavLink>
				<NavLink className={isActiveHandler} to="/bookmarks">
					{({ isActive }: IsActiveHandlerParams) => {
						return isActive ? <span>Ativo</span> : <span>Inativo</span>;
					}}
				</NavLink>
				<NavLink className={isActiveHandler} to="/cu">
					Bookmarks
				</NavLink>
			</nav>
			<div className="flex flex-1 gap-x-2.5 justify-end items-center">
				<img className="w-12 h-12 object-cover rounded-lg" src={Manoel} alt="" />
				<span className="font-noto-sans">Manoel Gomes</span>
			</div>
		</div>
	);
}
