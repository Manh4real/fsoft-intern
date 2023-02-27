function someFunction(number) {
	function otherFunction(input) {
		return a;
	}

	a = 5;

	return otherFunction;
}

var firstResult = someFunction(9); // a function that returns the value of variable "a" from outside of it.
// một function trả về giá trị của biến "a" từ bên ngoài nó.

var result = firstResult(2); // 5 - accesses variable "a" from its parent scope.
// 5 - lấy biến "a" từ bên ngoài (parent scope).