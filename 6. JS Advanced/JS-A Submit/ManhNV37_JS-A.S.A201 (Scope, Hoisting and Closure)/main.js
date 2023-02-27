var nodes = document.getElementsByTagName('button');

for (let i = 0; i < nodes.length; i++) {
	nodes[i].addEventListener('click', function() {
		console.log('You clicked element #' + i);
	});
}

/*
The "var" statement declares a function-scoped or globally-scoped variable.
So the code "var i = 0" makes variable "i" be accessed globally (in this context)
=> When "for" loop ends, value of "i" equals to 4 (changed in each loop)

Fix: use "let" statement. Each loop creates new scope, so "addEventListener"'s callback can 
access "i" correctly.
*/

/*
"var" statement khai báo biến ở function scope hoặc global scope
Vì vậy đoạn code "var i = 0" làm cho biến "i" có thể được access toàn cục (trong trường hợp này)
=> Khi "for" loop kết thúc, giá trị của "i" bằng 4 (đã thay đổi trong từng vòng lặp)

Fix: sử dụng "let" statement. Mỗi vòng lặp tạo ra một scope mới, do đó "addEventListener" callback
có thể access "i" một cách chính xác hơn.
*/
