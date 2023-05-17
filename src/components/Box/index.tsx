import React, { ReactNode } from "react";
import classnames from "clsx";

type BoxProps = {
	children?: ReactNode;
	className?: string;
};
export function Box({ children, className, ...rest }: BoxProps) {
	return (
		<div className={classnames("bg-white rounded-xl px-5 py-3 w-fit", className)}>{children}</div>
	);
}
