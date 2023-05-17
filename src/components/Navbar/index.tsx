import { NavLink } from "react-router-dom";
import classnames from "clsx";
import Tweeter from "@/assets/svg/tweeter.svg";
import { BsGearFill } from "react-icons/bs";
import { HiOutlineUserCircle, HiUsers } from "react-icons/hi";
import { MdLogout } from "react-icons/md";

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
				...theme.dropdown.floating.item,
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
				<NavLink className={isActiveHandler} to="/explore">
					Explore
				</NavLink>
				<NavLink className={isActiveHandler} to="/bookmarks">
					Bookmarks
				</NavLink>
			</nav>
			<div className="flex flex-1 gap-x-2.5 justify-end items-center">
				<img className="w-12 h-12 object-cover rounded-lg" src={Manoel} alt="" />

				<Dropdown arrowIcon label="Manoel Gomes" inline={true} theme={DropdownTheme}>
					<Dropdown.Item icon={HiOutlineUserCircle} className="text-xs font-noto-sans m-2">
						My Profile
					</Dropdown.Item>
					<Dropdown.Item icon={HiUsers} className="text-xs font-thin font-noto-sans m-2">
						Group chat
					</Dropdown.Item>
					<Dropdown.Item icon={BsGearFill} className="text-xs font-noto-sans m-2">
						Settings
					</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item icon={MdLogout} className="text-xs font-noto-sans m-2">
						Logout
					</Dropdown.Item>
				</Dropdown>
			</div>
		</div>
	);
}
