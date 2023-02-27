function swap(a, b) {
	var tmp = a;
	a = b;
	b = tmp;
}

var x = 1;
var y = 2;

swap(x, y);
console.log(x); // 1