import Link from "next/link";
import React from "react";
import classNames from "classnames";

interface ButtonLoginInterface {
	isLoggedIn?: boolean;
	classes?: string;
}

export function ButtonLogin({ isLoggedIn = false, classes = "" }: ButtonLoginInterface) {
	if (isLoggedIn) {
		return (
			<Link href="/dashboard" className={classNames("btn btn-primary rounded", classes)}>
				Welcome Back
			</Link>
		);
	}

	return <button className="btn btn-link">Login</button>;
}
