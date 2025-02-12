import React from "react";

function FaqListItem({ question, answer }: { question: string; answer: string }) {
	return (
		<li key={question} className="collapse collapse-plus bg-base-200">
			<input type="radio" name="my-accordion-3" defaultChecked />
			<div className="collapse-title text-xl font-medium">{question}</div>
			<div className="collapse-content">
				<p>{answer}</p>
			</div>
		</li>
	);
}

export default FaqListItem;
