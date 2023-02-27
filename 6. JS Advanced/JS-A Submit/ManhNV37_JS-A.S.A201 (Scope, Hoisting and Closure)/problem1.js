function test() {
	console.log(a);
	console.log(foo());

	var a = 1;

	function foo() {
		return 2;
	}
}

test(); // undefined 2
// hoisting - variable "a" was declared but not yet initialized before accessing in console.log
// "foo" function's lexical scope is "test" function local environment.

// Do hoisting nên biến "a" đã được khởi tạo nhưng chưa được gán giá trị trước khi sử dụng ở console.log
// "foo" function lexical scope là "test" function local environment.