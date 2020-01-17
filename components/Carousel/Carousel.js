/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
// Creating Image Array:

const img = [
  './assets/carousel/computer.jpeg',
  './assets/carousel/mountains.jpeg',
  './assets/carousel/trees.jpeg',
  './assets/carousel/turntable.jpeg',
  './assets/carousel/dallas-cowboys-1.jpg' //GO COWBOYS
];


const carousel = document.querySelector('.carousel-container');


function topCar(array) {

 
  const car1 = document.createElement('div'),
  carLeft = document.createElement('div'),
  carRight = document.createElement('div');  

  car1.classList.add('carousel');
  carLeft.classList.add('left-button');
  carRight.classList.add('right-button');  

  car1.append(carLeft);
  car1.append(carRight);  

  let i = 0;
  const newImg = document.createElement('img');
  newImg.src = array[i];
  newImg.style.display = 'block';

  car1.append(newImg);

  carLeft.onclick = function() {
    if(i > 0) {  
      i -= 1;
      newImg.src = array[i];
    } else {
      i = array.length - 1;
      newImg.src = array[i];
    }
  };

  carRight.onclick = function() {
    if(i < array.length - 1) {
      i += 1;
      newImg.src = array[i];
    } else {
      i = 0;
      newImg.src = array[i];
    }
  };  

  carLeft.textContent = ' J ';
  carRight.textContent = ' E ';

    return car1;

}

carousel.append(topCar(img)); 