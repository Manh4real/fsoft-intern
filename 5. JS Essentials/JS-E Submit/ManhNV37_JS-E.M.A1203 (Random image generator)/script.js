var theImages = [
	{
		src: "https://picsum.photos/id/237/200/300",
		width: "300",
		height: "300",
	},
	{
		src: "https://picsum.photos/id/238/300/300",
		width: "300",
		height: "300",
	},
	{
		src: "https://picsum.photos/id/239/300/300",
		width: "300",
		height: "300",
	},
	{
		src: "https://picsum.photos/id/240/300/300",
		width: "300",
		height: "300",
	},
	{
		src: "https://picsum.photos/id/241/300/300",
		width: "300",
		height: "300",
	},
	{
		src: "https://picsum.photos/id/242/300/300",
		width: "300",
		height: "300",
	},
];

const imageList = document.querySelectorAll(".images .image img");
const generateButton = document.querySelector(".gen-button");
let randomIndexes = [];
const count = imageList.length;

function randomIndex() {
	return Math.floor(Math.random() * theImages.length);
}

generate();

generateButton.onclick = function() {
	generate();
}

function generate() {
	randomIndexes = [];

	let i;
	let cnt = 0;

	do {
		i = randomIndex();

		if(!randomIndexes.includes(i)) {
			randomIndexes.push(i);
			cnt++;
		}
	} while(randomIndexes.includes(i) && cnt < 3);

	imageList.forEach((image, i) => {
		image.src = theImages[randomIndexes[i]].src;
	})
}