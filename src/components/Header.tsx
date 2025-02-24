import React from "react";
import { ButtonLogin } from "./ButtonLogin";

export const Header = () => {
	return (
		<section className="bg-base-200 sticky top-0">
			<div className="flex justify-between items-center px-8 py-2 max-w-5xl mx-auto">
				<div className="font-bold">CodeFast</div>
				<div className="space-x-4 max-md:hidden">
					<a className="link link-hover" href="#pricing">
						Pricing
					</a>
					<a className="link link-hover" href="#faq">
						FAQ
					</a>
				</div>
				<div>
					<ButtonLogin isLoggedIn={false} />
				</div>
			</div>
		</section>
	);
};
