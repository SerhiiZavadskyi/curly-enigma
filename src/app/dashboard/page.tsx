import Link from "next/link";
import React from "react";

function Dashboard() {
	return (
		<div>
			<Link className="btn btn-nav" href={"/"}>
				Back
			</Link>
		</div>
	);
}

export default Dashboard;
