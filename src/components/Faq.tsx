import React from "react";
import FaqListItem from "./FaqListItem";

function Faq() {
	const qa = [
		{
			question: "What is your return policy?",
			answer: "We offer a 30-day return policy on all items. Items must be unused and in their original packaging.",
		},
		{
			question: "Do you offer international shipping?",
			answer: "Yes, we ship worldwide. Shipping costs and delivery times vary depending on the destination.",
		},
		{
			question: "How can I track my order?",
			answer: "Once your order is shipped, you will receive a tracking number via email to track your package in real time.",
		},
		{
			question: "What payment methods do you accept?",
			answer: "We accept major credit cards, PayPal, Apple Pay, and Google Pay.",
		},
		{
			question: "How can I contact customer support?",
			answer: "You can reach us via email at support@example.com or through our live chat during business hours.",
		},
	];

	return (
		<section className="bg-base-200 flex" id="faq">
			<div className="max-w-3xl mx-auto flex-1">
				<p className="text-sm uppercase font-medium text-center text-primary">Faq</p>
				<h2 className="text-3xl lg:text-4xl font-extrabold mb-12 text-center">Frequently Asked Questions</h2>

				<ul className="collapse flex-1">
					{qa.map(({ question, answer }) => (
						<FaqListItem key={question} question={question} answer={answer} />
					))}
				</ul>
			</div>
		</section>
	);
}

export default Faq;
