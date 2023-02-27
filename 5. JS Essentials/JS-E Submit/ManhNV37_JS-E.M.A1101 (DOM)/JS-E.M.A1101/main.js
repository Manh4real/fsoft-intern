const images = ['img1.jpg', 'img2.png', 'img3.png'];
let index = 0;
 
// Add your code here
// Task 1
const imageContainer = document.querySelector(".img-container");
const backBtn = document.querySelector(".btn-group .back");
const nextBtn = document.querySelector(".btn-group .next");

renderImage();

backBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.1
  index--;

  if(index < 0) index = 0;

  renderImage();
});

nextBtn.addEventListener('click', function() {
  // Add your code here
  // Task 3.2
  index++;

  if(index >= images.length) {
    index = images.length - 1;
  }

  renderImage();
});

// Add your code here
// Task 2
function renderImage() {
  imageContainer.innerHTML = `<img src="./images/${images[index]}" alt="">`;
}