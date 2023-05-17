import { ReactNode } from "react";

type ContentWrapperProps = {
	children?: ReactNode;
};
export function ContentWrapper({ children }: ContentWrapperProps) {
	return <div className="container mx-auto mt-6">{children}</div>;
}
