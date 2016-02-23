/* place holder to be replaced by array of objects */
objectArray = [];

/* Constructor Function */
function testObject (imgSrc, name){
  this.name = name;
  this.imgSrc = 'img/' + imgSrc + '.jpg'
  this.elementID = imgSrc;

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
}


function randomNum() {
  var random = Math.floor((Math.random() * objectArray.length));
  return random;
}

randomIndexArray = function() {
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

var bag = new testObject('bag','R2D2 Luggage');
var banana = new testObject('banana','Banana Slicer');
var bathroom = new testObject('bathroom','iPad/Toilet Paper Holder');
var boots = new testObject('boots','Open Toed Rain Boots');

// Function for adding content to page
