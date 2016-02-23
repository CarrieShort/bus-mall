/* place holder to be replaced by array of objects */
var objectArray = [];


/* Constructor Function */
function testObject (imgSrc,name,imgType){
  this.name = name;
  this.imgSrc = 'img/' + imgSrc + imgType;
  this.elementID = imgSrc;
  this.display = 0;
  this.clicked = 0;

  this.updateObjectArray();
}

testObject.prototype.updateObjectArray = function () {
  objectArray.push(this);
};

testObject.prototype.appendObject = function() {
  var oneEl = document.getElementById('imageDisplay');
  var objectImg = document.createElement('img');
  objectImg.src = this.imgSrc;
  objectImg.setAttribute('id',this.elementID);
  oneEl.appendChild(objectImg);
  this.display++;
}


function randomNum() {
  var random = Math.floor((Math.random() * objectArray.length));
  return random;
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
  var indexArray = [ran1,ran2,ran3];
  return indexArray;
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


// Function for adding content to page

function generatePage(){
  var randomIndex = randomIndexArray();
  for (var i=0; i < randomIndex.length; i++) {
    var index = randomIndex[i];
    var object = objectArray[index];
    object.appendObject();
  }
}
generatePage();

function logClick(event) {
  event.preventDefault();
  var clickedID = this.id;
  for(var i=0; i <objectArray.length;i++) {
    if (clickedID === objectArray[i].elementID) {
      objectArray[i].clicked++;
    }
  }
  var oneEl = document.getElementById('imageDisplay');
  oneEl.textContent='';
  generatePage();
  imgEventListener();
}
function imgEventListener(){
  var image = document.getElementsByTagName('img');
  for(var i = 0;i<image.length;i++){
    image[i].addEventListener('click', logClick);
  }
}
imgEventListener();
