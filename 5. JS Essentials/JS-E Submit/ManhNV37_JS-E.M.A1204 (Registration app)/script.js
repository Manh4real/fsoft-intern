const form = document.querySelector("#form");

const password = document.querySelector("#password");
const confirmPW = document.querySelector("#confirm-pw");

const data = {
	username: {
		isValid: false
	},
	password: {
		isValid: false
	},
	confirmPW: {
		isValid: false
	}
}

form.onsubmit = function(e) {
	e.preventDefault();

	const formFields = this.querySelectorAll("[data-type]");

	// check empty input
	formFields.forEach(field => {
		if(field.type === "text") {
			const message = field.parentElement.querySelector(".message")

			if(!message) return;

			if(field.value === "") {
				message.textContent = `${field.dataset?.type || "This field"} is required.`;
				data[field.name].isValid = false;
			} else {
				message.textContent = "";
				data[field.name].isValid = true;
			}
		}
	});

	validateConfirmPW();

	const isAllValid = Object.entries(data).every(([_, d]) => d.isValid);

	if(isAllValid) {
		form.querySelector(".message.success").textContent = "You have registered successfully!";
	} else {
		form.querySelector(".message.success").textContent = "";
	}
}

function validateConfirmPW() {
	if(confirmPW.value !== "") {
		if(!checkConfirmPW()) {
			data.confirmPW.isValid = false;
			const message = confirmPW.parentElement.querySelector(".message");

			if(message) {
				message.textContent = "Password and confirm password do not match.";
			}
		} else {
			data.confirmPW.isValid = true;
		}
	}
}

function checkConfirmPW() {
	return confirmPW.value === password.value;
}