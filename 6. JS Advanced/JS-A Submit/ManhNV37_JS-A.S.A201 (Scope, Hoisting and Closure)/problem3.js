var a = 1;

function b() {
	a = 10;
	return;

	function a() { }
}

b();

console.log(a); // 1 - hoisting. In function b, due to hoisting, initially variable "a" was a function
// and exists in a function scope ("b()"'s local environment). 
// (Therefore, variable "a" in global scope doesn't affect in this situation.)
// Then, "a" (in "b" function) was assigned to 10.

// 1 - Do hoisting, trong function "b", ban đầu biến "a" là một function và tồn tại trong
// function scope ("b()" local environment)
// (Vì vậy, biến "a" ở global không bị ảnh hưởng trong trường hợp này)
// Sau đó, "a" (trong "b" function) được gán bằng 10.