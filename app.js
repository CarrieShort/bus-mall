/* place holder to be replaced by array of objects */
objectArray = ['baby','blue','bear','bees','berry','blaster'];

/* Constructor Function */
function testObject (imgSrc, name){
  this.name = name;
  this.imgSrc = 'img/' + imgSrc + '.jpg'
  this.elementID = imgSrc;
}

testObject.prototype.updateObjectArray = function () {
  objectArray.push(this);
};

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
