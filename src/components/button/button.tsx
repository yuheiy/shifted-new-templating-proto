import React from "react";

type ButtonProps = {
	children: React.ReactNode;
};

export function Button({ children }: ButtonProps) {
	return (
		<button className="button" type="button">
			{children}
		</button>
	);
}
