function reverse(s) {
	// snake_case to PascalCase
	let a = s.split("_");

	a = a.map(str => str.charAt(0).toUpperCase() + str.slice(1));

	return a.join("");
}

console.log(reverse("user_name") === "UserName");