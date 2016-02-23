/* place holder to be replaced by array of objects */
var objectArray = [];


/* Constructor Function */
function testObject (imgSrc,name,imgType){
  this.name = name;
  this.imgSrc = 'img/' + imgSrc + imgType;
  this.elementID = imgSrc;
  this.display = 0;
  this.clicked = 0;
  objectArray.push(this);
}


testObject.prototype.render = function() {
  var imageDisplaySection = document.getElementById('imageDisplay');
  var objectImg = document.createElement('img');
  objectImg.src = this.imgSrc;
  objectImg.id = this.elementID;
  imageDisplaySection.appendChild(objectImg);
  this.display++;
}

var bag = new testObject('bag','R2D2 Luggage','.jpg');
var banana = new testObject('banana','Banana Slicer','.jpg');
var bathroom = new testObject('bathroom','iPad/Toilet Paper Holder','.jpg');
var boots = new testObject('boots','Open Toed Rain Boots','.jpg');
var breakfast = new testObject('breakfast','Breakfast Maker','.jpg');
var bubblegum = new testObject('bubblegum','Meatball Bubblegum','.jpg');
var chair = new testObject('chair','Uncomfortable Chair','.jpg');
var cthulhu = new testObject('cthulhu','Cthulhu Action Figure','.jpg');
var dogDuck = new testObject('dog-duck','Duckbill Muzzle','.jpg');
var dragon = new testObject('dragon','Dragon Meet','.jpg');
var pen = new testObject('pen','Pen Utensils','.jpg');
var petSweep = new testObject('pet-sweep','Pet Sweeper Boots','.jpg');
var scissors = new testObject('scissors','Pizza Scissors','.jpg');
var shark = new testObject('shark','Shark Sleeping Bag','.jpg');
var sweep = new testObject('sweep','Baby Sweeper','.png');
var tauntaun = new testObject('tauntaun','Tauntaun Sleeping Bag','.jpg');
var unicorn = new testObject('unicorn','Unicorn Meat','.jpg');
var usb = new testObject('usb','Tentacle USB','.gif');
var waterCan = new testObject('water-can','Infinite Loop Watering Can','.jpg');
var wineGlass = new testObject('wine-glass','Guaranteed Spill Wine Glass','.jpg');

function randomNum() {
  return Math.floor((Math.random() * objectArray.length));
}

function randomIndexArray() {
  var ran1 = randomNum();
  var ran2 = randomNum();
  var ran3 = randomNum();
  while (ran1 === ran2){
    ran2 = randomNum();
  }
  while (ran1 === ran3 || ran2 === ran3){
    ran3 = randomNum();
  }
  return [ran1,ran2,ran3];
}

// Function for adding content to page
function generatePage(){
  var randomIndex = randomIndexArray();
  for (var i=0; i < randomIndex.length; i++) {
    var index = randomIndex[i];
    var object = objectArray[index];
    object.render();
  }
}

function threeNewImages() {
  var imageDisplaySection = document.getElementById('imageDisplay');
  imageDisplaySection.textContent='';
  generatePage();
  imgEventListener();
}

function logClick() {
  var clickedID = this.id;
  for(var i=0; i <objectArray.length;i++) {
    if (clickedID === objectArray[i].elementID) {
      objectArray[i].clicked++;
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

generatePage();
imgEventListener();
