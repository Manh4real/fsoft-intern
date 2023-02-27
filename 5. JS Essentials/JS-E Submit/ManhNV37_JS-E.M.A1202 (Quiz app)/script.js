const myQuestions = [
	{
		question: 'Javascript is _________ language.',
		answers: {
			a: 'Programming',
			b: 'Application',
			c: 'None of These',
			d: 'Scripting'
		},
		multi: false,
		correctAnswer: 'a'
	},
	{
		question: 'Which of the following is a valid type of function javascript supports?',
		answers: {
			a: 'named function',
			b: 'anonymous function',
			c: 'both of the above',
			d: 'none of the above'
		},
		multi: false,
		correctAnswer: 'c'
	},
	{
		question: 'Which built-in method returns the index within the calling String object of the first occurrence of the specified value?',
		answers: {
			a: 'getIndex()',
			b: 'location()',
			c: 'indexOf()',
			d: 'getLocation()'
		},
		multi: false,
		correctAnswer: 'c'
	},
	{
		question: 'How to declare variables in Javascript (choose 3)',
		answers: {
			a: 'var a',
			b: 'const a',
			c: 'float a',
			d: 'let a'
		},
		multi: true,
		correctAnswer: ['a', 'b', 'd']
	},
	{
		question: 'Which one of the following is valid data type of JavaScript',
		answers: {
			a: 'number',
			b: 'void',
			c: 'boolean',
			d: 'nothing'
		},
		multi: false,
		correctAnswer: 'c'
	}
];

const answersListElement = document.querySelector(".answers");
const questionElement = document.querySelector("#question");
const resultElement = document.querySelector("#result");
const answers = myQuestions.map((q, i) => {
	if(q.multi) {
		return { atQuestion: i, answered: [] };
	}

	return { atQuestion: i, answered: "" };
});

const buttonsContainer = document.querySelector(".buttons");
const prevButton = document.querySelector(".buttons .prev");
const nextButton = document.querySelector(".buttons .next");

const submitButton = document.createElement("button");
submitButton.type = "submit";
submitButton.innerHTML = "Submit Quiz";
submitButton.classList.add("submit-button");
submitButton.id = "submit-button";

let currentQuestionIndex = 0;

renderQuestion();

submitButton.onclick = function(e) {
	e.preventDefault();
	savePreviousQuestion(); // save last answer

	const result = answers.reduce((acc, answer) => {
		let score = 0;
		const correctAnswers = myQuestions[answer.atQuestion].correctAnswer;

		if(myQuestions[answer.atQuestion].multi) {
			const isAllCorrect = correctAnswers.every(ans => answer.answered.includes(ans));
			score = isAllCorrect? 1: 0;
		} else {
			const correctAnswer = myQuestions[answer.atQuestion].correctAnswer;
			score = answer.answered === correctAnswer? 1: 0;
		}

		return acc + score;
	}, 0);

	resultElement.textContent = `${result} out of ${myQuestions.length}`;
}
prevButton.onclick = function() {
	savePreviousQuestion();
	currentQuestionIndex--;

	if(currentQuestionIndex <= 0) {
		currentQuestionIndex = 0;
	}

	renderQuestion();
}
nextButton.onclick = function() {
	savePreviousQuestion();
	currentQuestionIndex++;

	if(currentQuestionIndex >= myQuestions.length - 1) {
		currentQuestionIndex = myQuestions.length - 1;
	}

	renderQuestion();
}

function savePreviousQuestion() {
	if(myQuestions[currentQuestionIndex].multi) {
		const answerElements = answersListElement.querySelectorAll("input[data-answer]:checked");

		answers[currentQuestionIndex].answered = []; // reset
		
		answerElements.forEach(elem => {
			const answer = elem.dataset.answer;

			answers[currentQuestionIndex].answered.push(answer);
		})
	} else {
		const answerElement = answersListElement.querySelector("input[data-answer]:checked");

		if(answerElement) {
			const answer = answerElement.dataset.answer;

			answers[currentQuestionIndex].answered = answer;
		}
	}

}

function renderQuestion() {
	// button
	if(currentQuestionIndex <= 0) {
		prevButton.disabled = true;
	} else {
		prevButton.disabled = false;
	}

	if(currentQuestionIndex >= myQuestions.length - 1) {
		nextButton.disabled = true;

		if(!buttonsContainer.querySelector("#submit-button")) {
			buttonsContainer.appendChild(submitButton);
		}
	} else {
		nextButton.disabled = false;

		if(buttonsContainer.querySelector("#submit-button")) {
			buttonsContainer.removeChild(submitButton);
		}
	}

	// question text
	questionElement.textContent = `Question ${currentQuestionIndex + 1}: ${myQuestions[currentQuestionIndex].question}`;

	// display answers
	answersListElement.innerHTML = "";

	Object.entries(myQuestions[currentQuestionIndex].answers).forEach(([a, b]) => {
		if(myQuestions[currentQuestionIndex].multi) {
			answersListElement.innerHTML += `
				<li>
					<input type="checkbox" name="answer-${a}" id="answer-${a}" data-answer="${a}" class="answer">
					<label for="answer-${a}">${b}</label>
				</li>
			`;
		} else {
			answersListElement.innerHTML += `
				<li>
					<input type="radio" name="answer" id="answer-${a}" data-answer="${a}" class="answer">
					<label for="answer-${a}">${b}</label>
				</li>
			`;
		}
	});

	// display selected answers
	const answered = answers[currentQuestionIndex].answered;

	if(myQuestions[currentQuestionIndex].multi) {
		answered.forEach(ans => {
			const a = document.querySelector(`input[data-answer="${ans}"]`);
			
			if(a) {
				a.checked = true;
			}
		})
	} else {
		const a = document.querySelector(`input[data-answer="${answered}"]`);
		
		if(a) {
			a.checked = true;
		}
	}
}