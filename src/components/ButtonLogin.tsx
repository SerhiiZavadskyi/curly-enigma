"use client";

import Link from "next/link";
import React from "react";
import classNames from "classnames";
import { signIn, useSession } from "next-auth/react";

interface ButtonLoginInterface {
	isLoggedIn?: boolean;
	classes?: string;
}

export function ButtonLogin({ classes = "" }: ButtonLoginInterface) {
	const { data: session } = useSession();
	const dashboardUrl = "/dashboard";

	if (session) {
		return (
			<Link href={dashboardUrl} className={classNames("btn btn-primary rounded", classes)}>
				Welcome Back {session.user?.name}
			</Link>
		);
	}

	return (
		<button
			className={classNames("btn btn-primary rounded", classes)}
			onClick={() => {
				signIn(undefined, { callbackUrl: dashboardUrl });
			}}
		>
			Get started
		</button>
	);
}
