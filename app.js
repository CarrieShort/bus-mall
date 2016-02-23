/* place holder to be replaced by array of objects */
var productsArray = [];

/* Constructor Function */
function busMallProduct (imgSrc,name,imgType){
  this.name = name;
  this.imgSrc = 'img/' + imgSrc + imgType;
  this.elementID = imgSrc;
  this.display = 0;
  this.clicked = 0;
  productsArray.push(this);
}

busMallProduct.prototype.render = function() {
  var imageDisplaySection = document.getElementById('imageDisplay');
  var productImg = document.createElement('img');
  productImg.src = this.imgSrc;
  productImg.id = this.elementID;
  imageDisplaySection.appendChild(productImg);
  this.display++;
}

var bag = new busMallProduct('bag','R2D2 Luggage','.jpg');
var banana = new busMallProduct('banana','Banana Slicer','.jpg');
var bathroom = new busMallProduct('bathroom','iPad/Toilet Paper Holder','.jpg');
var boots = new busMallProduct('boots','Open Toed Rain Boots','.jpg');
var breakfast = new busMallProduct('breakfast','Breakfast Maker','.jpg');
var bubblegum = new busMallProduct('bubblegum','Meatball Bubblegum','.jpg');
var chair = new busMallProduct('chair','Uncomfortable Chair','.jpg');
var cthulhu = new busMallProduct('cthulhu','Cthulhu Action Figure','.jpg');
var dogDuck = new busMallProduct('dog-duck','Duckbill Muzzle','.jpg');
var dragon = new busMallProduct('dragon','Dragon Meet','.jpg');
var pen = new busMallProduct('pen','Pen Utensils','.jpg');
var petSweep = new busMallProduct('pet-sweep','Pet Sweeper Boots','.jpg');
var scissors = new busMallProduct('scissors','Pizza Scissors','.jpg');
var shark = new busMallProduct('shark','Shark Sleeping Bag','.jpg');
var sweep = new busMallProduct('sweep','Baby Sweeper','.png');
var tauntaun = new busMallProduct('tauntaun','Tauntaun Sleeping Bag','.jpg');
var unicorn = new busMallProduct('unicorn','Unicorn Meat','.jpg');
var usb = new busMallProduct('usb','Tentacle USB','.gif');
var waterCan = new busMallProduct('water-can','Infinite Loop Watering Can','.jpg');
var wineGlass = new busMallProduct('wine-glass','Guaranteed Spill Wine Glass','.jpg');

function randomProductsArrayIndex() {
  return Math.floor((Math.random() * productsArray.length));
}

function threeRandomProductIndexes() {
  var ran1 = randomProductsArrayIndex();
  var ran2 = randomProductsArrayIndex();
  var ran3 = randomProductsArrayIndex();
  while (ran1 === ran2){
    ran2 = randomProductsArrayIndex();
  }
  while (ran1 === ran3 || ran2 === ran3){
    ran3 = randomProductsArrayIndex();
  }
  return [ran1,ran2,ran3];
}

// Function for adding content to page
function renderThreeImages(){
  var randomProductIndexArray = threeRandomProductIndexes();
  for (var i=0; i < randomProductIndexArray.length; i++) {
    var index = randomProductIndexArray[i];
    var object = productsArray[index];
    object.render();
  }
}

function threeNewImages() {
  var imageDisplaySection = document.getElementById('imageDisplay');
  imageDisplaySection.textContent='';
  renderThreeImages();
  imgEventListener();
}

function logClick() {
  var clickedID = this.id;
  for(var i=0; i <productsArray.length;i++) {
    if (clickedID === productsArray[i].elementID) {
      productsArray[i].clicked++;
    }
  }
  threeNewImages();
}

function imgEventListener(){
  var displayedImages = document.getElementsByTagName('img');
  for(var i = 0;i<displayedImages.length;i++){
    displayedImages[i].addEventListener('click', logClick);
  }
}

renderThreeImages();
imgEventListener();
