/* place holder to be replaced by array of objects */
stuff = ['baby','blue','bear','bees','berry','blaster'];

/* to be moved to method */
function randomNum() {
  var random = Math.floor((Math.random() * stuff.length));
  return random;
}

/* to be moved to method */
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
