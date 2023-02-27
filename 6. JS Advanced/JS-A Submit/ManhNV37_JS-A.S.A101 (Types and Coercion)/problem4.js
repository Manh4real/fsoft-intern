function mul(a, b) {
	return String(BigInt(a) * BigInt(b));
}

console.log(mul(12345678910111213n, 89));