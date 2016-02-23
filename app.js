/* place holder to be replaced by array of objects */
var objectArray = [];


/* Constructor Function */
function testObject (imgSrc,name,imgType){
  this.name = name;
  this.imgSrc = 'img/' + imgSrc + imgType;
  this.elementID = imgSrc;
  this.Display = 0;

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
  this.Display++;
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
var breakfast = new testObject('breakfast','Open Toed Rain Boots','.jpg');
var bubblegum = new testObject('bubblegum','Open Toed Rain Boots','.jpg');
var chair = new testObject('chair','Open Toed Rain Boots','.jpg');
var cthulhu = new testObject('cthulhu','Open Toed Rain Boots','.jpg');
var dogDuck = new testObject('dog-duck','Open Toed Rain Boots','.jpg');
var dragon = new testObject('dragon','Open Toed Rain Boots','.jpg');
var pen = new testObject('pen','Open Toed Rain Boots','.jpg');
var petSweep = new testObject('pet-sweep','Open Toed Rain Boots','.jpg');
var scissors = new testObject('scissors','Open Toed Rain Boots','.jpg');
var shark = new testObject('shark','Open Toed Rain Boots','.jpg');
var sweep = new testObject('sweep','Open Toed Rain Boots','.png');
var tauntaun = new testObject('tauntaun','Open Toed Rain Boots','.jpg');
var unicorn = new testObject('unicorn','Open Toed Rain Boots','.jpg');
var usb = new testObject('usb','Open Toed Rain Boots','.gif');
var waterCan = new testObject('water-can','Open Toed Rain Boots','.jpg');
var wineGlass = new testObject('wine-glass','Open Toed Rain Boots','.jpg');

var randomIndex = randomIndexArray();

// Function for adding content to page

function generatePage(){
  for (var i=0; i < randomIndex.length; i++) {
    var index = randomIndex[i];
    var object = objectArray[index];
    object.appendObject();
  }
}
generatePage();

// go through array of objects and see which IDs were clicked.. if true log a click. Also whenever append object is fired update displayCount. Create Display Count. Every time generate page fires count.
