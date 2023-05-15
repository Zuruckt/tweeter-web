import { NavLink } from "react-router-dom";
import classnames from "clsx";
import Tweeter from "@/assets/svg/tweeter.svg";
import { HiOutlineUserCircle } from "react-icons/hi";
import Manoel from "@/assets/images/Manoel-Gomes.jpg";
import { Dropdown, FlowbiteDropdownTheme, useTheme } from "flowbite-react";

type IsActiveHandlerParams = {
	isActive: boolean;
};

export function Navbar() {
	const { theme } = useTheme();
	const DropdownTheme: FlowbiteDropdownTheme = {
		...theme.dropdown,
		floating: {
			...theme.dropdown.floating,
			item: {
				icon: "",
				base: "font-noto-sans text-lg",
			},
		},
		inlineWrapper: classnames(theme.dropdown.inlineWrapper, "font-noto-sans"),
	};

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
					Home
				</NavLink>
				<NavLink className={isActiveHandler} to="/bookmarks">
					Explore
				</NavLink>
				<NavLink className={isActiveHandler} to="/cu">
					Bookmarks
				</NavLink>
			</nav>
			<div className="flex flex-1 gap-x-2.5 justify-end items-center">
				<img className="w-12 h-12 object-cover rounded-lg" src={Manoel} alt="" />

				<Dropdown arrowIcon label="Manoel Gomes" inline={true} theme={DropdownTheme}>
					<Dropdown.Item icon={HiOutlineUserCircle} className="bg-red-400 leading-4">
						My Profile
					</Dropdown.Item>
					<Dropdown.Item className="px-3.5">Group chat</Dropdown.Item>
					<Dropdown.Item className="px-3.5">Settings</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item className="px-3.5">Logout</Dropdown.Item>
				</Dropdown>
			</div>
		</div>
	);
}
