/* place holder to be replaced by array of objects */
var productsArray = [];
var tallyRenders = 0;

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
  if(tallyRenders < 4){
    var randomProductIndexArray = threeRandomProductIndexes();
    for (var i=0; i < randomProductIndexArray.length; i++) {
      var index = randomProductIndexArray[i];
      var object = productsArray[index];
      object.render();
    }
    tallyRenders++;
  }
  else{
    document.getElementById('button').style.display = 'block';
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

// chartjs
function renderClickDisplayChart() {
  var productLabels = [];
  var productClicks = [];
  var productDisplays = [];
  for(var i=0;i < productsArray.length;i++) {
    productLabels.push(productsArray[i].name);
    productClicks.push(productsArray[i].clicked);
    productDisplays.push(productsArray[i].display);
  }

  var clickData = {
    labels : productLabels,
    datasets : [
      {
        label: 'Clicks',
        		fillColor : 'rgba(73,188,170,0.4)',
        		strokeColor : 'rgba(72,174,209,0.4)',
        		data : productClicks
      },
      {
        label: 'Displays',
        		fillColor : '#48A497',
        		strokeColor : '#48A4D1',
        		data : productDisplays,
      }
    ],
  }
  var clicks = document.getElementById('clicks').getContext('2d');
  new Chart(clicks).Bar(clickData,{
    multiTooltipTemplate: '<%= datasetLabel %> - <%= value %>'
  });
}

function renderCtrChart() {
  var productLabels = [];
  var productCtr = [];
  for(var i=0;i < productsArray.length;i++) {
    productLabels.push(productsArray[i].name);
  }
  for(var i=0;i < productsArray.length;i++) {
    productCtr.push((productsArray[i].clicked/productsArray[i].display));
  }

  var ctrData = {
    labels : productLabels,
    scaleLabel : '<%=value%>',
    datasets : [
      		{
        			fillColor : 'rgba(73,188,170,0.4)',
        			strokeColor : 'rgba(72,174,209,0.4)',
        			data : productCtr
      		}
    ]
  }
  var ctr = document.getElementById('ctr').getContext('2d');
  new Chart(ctr).Bar(ctrData);
}

function showChartResults(){
  this.style.display = 'none'
  renderClickDisplayChart();
  // renderCtrChart();
}

renderThreeImages();
imgEventListener();
var resultButton = document.getElementById('button');
resultButton.addEventListener('click',showChartResults);
