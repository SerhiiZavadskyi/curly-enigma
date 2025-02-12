import Image from "next/image";

import { ButtonLogin } from "@/components/ButtonLogin";
import Faq from "@/components/Faq";
import { Header } from "@/components/Header";
import ListItem from "@/components/ListItem";
import ProductDemo from "@/app/productDemo.jpeg";

export default function Home() {
	const isLoggedIn = true;
	const listItems = [
		{ id: 1, text: "Affordable Quality" },
		{ id: 2, text: "Great Value for Money" },
		{ id: 3, text: "User-Friendly & Effective" },
		{ id: 4, text: "Perfect for Everyday Use" },
	];
	return (
		<main>
			<Header />
			<section className="text-center py-32 px-8 max-w-5xl mx-auto flex max-lg:flex-col max-lg:items-center gap-14 lg:text-left lg:items-start">
				<Image src={ProductDemo} alt="product Demo" className="w-96 rounded-lg" />
				<div className="flex-1">
					<h1 className="text-4xl lg:text-5xl font-extrabold mb-4">
						Lorem ipsum dolor sit amet consectetur adipisicing.
					</h1>
					<div className="opacity-90 mb-10">
						Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero officiis nobis aspernatur, ad
						atque nostrum sequi culpa placeat, quis similique libero.
					</div>

					<ButtonLogin isLoggedIn={isLoggedIn} />
				</div>
			</section>

			<section className="bg-base-200" id="pricing">
				<div className="py-32 px-8 max-w-3xl mx-auto">
					<p className="text-sm uppercase font-medium text-center text-primary">Pricing</p>
					<h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">
						A pricing that adapts to your needs
					</h2>

					<div className="p-8 bg-base-100 max-w-96 rounded-3xl mx-auto space-y-6">
						<div className="flex gap-2 items-baseline">
							<div className="text-4xl font-black">$12</div>
							<div className="uppercase text-sm font-medium opacity-60">/month</div>
						</div>

						<ul className="space-y-2">
							{listItems.map(({ text }) => (
								<ListItem text={text} key={text} />
							))}
						</ul>
						<ButtonLogin isLoggedIn={isLoggedIn} classes="w-full" />
					</div>
				</div>
			</section>
			<Faq />
		</main>
	);
}
