"use client";
import { signOut } from "next-auth/react";

function ButtonLogout() {
	return (
		<div className="btn btn-ghost" onClick={() => signOut()}>
			Logout
		</div>
	);
}

export default ButtonLogout;
