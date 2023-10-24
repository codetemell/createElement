let content=document.querySelector('.content')
// let url='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4mcIFORp5ylsIntEjor9Jo4Lh0bxX3LnRrQ&usqp=CAU'
// function addBox(){
//     let div=document.createElement('div');
//     let img=document.createElement('img');
//      img.setAttribute('src',url)
//      div.innerHTML='<h1>salom</h1>'
//      div.prepend(img)
// content.append('div')
// }
// addBox()
// vazife8

// const createDivBtn = document.getElementById('createDivBtn');
// const createImgBtn = document.getElementById('createImgBtn');
// const container = document.getElementById('container');

// createDivBtn.addEventListener('click', function() {
//   const div = document.createElement('div');
//   div.textContent = 'This is a div element  ';
//   div.style.backgroundColor='red'
//   div.style.width='230px'
//   div.style.height='220px'
//   container.appendChild(div);
// });


// createImgBtn.addEventListener('click', function() {
//   const img = document.createElement('img');
//   img.src = 'https://png.pngtree.com/thumb_back/fw800/background/20230415/pngtree-flower-background-hd-images-image_2433186.jpg';
//   img.style.width='220px'
//   img.style.heigth='120px'
//   container.appendChild(img);
// });
//
// img bitti 8

// img create start
var images = [
  "https://cdn.britannica.com/59/94459-050-DBA42467/Skyline-Chicago.jpg",
"https://cdindex.net/assets/front/theme/img/img-city-newyork.jpg",
  "https://www.tripsavvy.com/thmb/IyhuakzNaLlzFYNMpBYDPXt05T0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/GettyImages-748610951-5bd70c0b46e0fb0051d0afcb.jpg",
  "https://images.pexels.com/photos/169647/pexels-photo-169647.jpeg?cs=srgb&dl=pexels-peng-liu-169647.jpg&fm=jpg",
  "https://st.depositphotos.com/1035350/2277/i/450/depositphotos_22772802-stock-photo-tokyo-cityscape.jpg",
  "https://burst.shopifycdn.com/photos/city-landscape-at-night.jpg?width=1000&format=pjpg&exif=0&iptc=0"
];

function createImg(containerId) {
  var imgContainer = document.getElementById(containerId);
  var img = document.createElement("img");
  img.src = getRandomImage(images);
  imgContainer.appendChild(img);
  img.classList.add('foto')
  
}

function getRandomImage(images) {
  var randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// div create start

var container = document.getElementById("container");
function createDiv(containerId) {
  var divContainer = document.getElementById(containerId);
  var div = document.createElement("div");
  div.className = "myDiv";
  div.style.backgroundColor = getRandomColor();
  // div.style.borderRadius="5px"
  div.classList.add('foto')

  divContainer.appendChild(div);
}

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


// silme

function removeElements() {
  var divContainer = document.getElementById("divContainer1");
  var imgContainer = document.getElementById("imgContainer2");

  while (divContainer.firstChild) {
    divContainer.removeChild(divContainer.firstChild);
  }

  while (imgContainer.firstChild) {
    imgContainer.removeChild(imgContainer.firstChild);
  }
}

var removeButton = document.getElementById("removeButton");
removeButton.addEventListener("click", removeElements);