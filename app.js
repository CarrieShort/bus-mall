/* Variables */
var productsArray = [];
var tallyRenders = 0;
var clickDisplayChart = null;
var maxNumberOfImageSetsDisplayed = 10;
var imageDisplaySection = document.getElementById('imageDisplay');
var resultButton = document.getElementById('results');
var againButton = document.getElementById('again');
var chartContainer = document.getElementById('chartContainer');
var productLabels;
var productClicks;
var productDisplays;
var storedProductData;
var productData;

/* Constructor Function */
function busMallProduct (imgSrc,name,imgType){
  this.name = name;
  this.imgSrc = 'img/' + imgSrc + imgType;
  this.elementID = imgSrc;
  this.display = 0;
  this.clicked = 0;
  productsArray.push(this);
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

function render(randomProduct) {
  var productImg = document.createElement('img');
  productImg.src = randomProduct.imgSrc;
  productImg.id = randomProduct.elementID;
  imageDisplaySection.appendChild(productImg);
  randomProduct.display++;
  updateLocalStorage();
};

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
  if(tallyRenders < maxNumberOfImageSetsDisplayed){
    var randomProductIndexArray = threeRandomProductIndexes();
    for (var i=0; i < randomProductIndexArray.length; i++) {
      var index = randomProductIndexArray[i];
      var object = productsArray[index];
      render(productsArray[index]);
    }
    tallyRenders++;
  }
  else{
    resultButton.style.display = 'block';
  }
}

function threeNewImages() {
  imageDisplaySection.textContent='';
  renderThreeImages();
  imgEventListener();
}

function logClick() {
  var clickedID = this.id;
  for(var i=0; i <productsArray.length;i++) {
    if (clickedID === productsArray[i].elementID) {
      productsArray[i].clicked++;
      updateLocalStorage();
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

function generateDataForChart() {
  productLabels=[];
  productClicks=[];
  productDisplays=[];
  for(var i=0;i < productsArray.length;i++) {
    productLabels.push(productsArray[i].name);
    productClicks.push(productsArray[i].clicked);
    productDisplays.push(productsArray[i].display);
  }
}

function DestroyExistingChart(){
  if(clickDisplayChart!=null){
    clickDisplayChart.destroy();
  }
}

// chartjs
function renderClickDisplayChart() {
  DestroyExistingChart();
  generateDataForChart();
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
  };
  var clickDisplayCanvas = chartContainer.getContext('2d');
  clickDisplayChart = new Chart(clickDisplayCanvas).Bar(clickData,{
    multiTooltipTemplate: '<%= datasetLabel %> - <%= value %>',
  });
}

// Buttons for User
function showChartResults(){
  chartContainer.style.visibility = 'visible';
  this.style.display = 'none';
  renderClickDisplayChart();
  again.style.display = 'block';
}

function restartGame(){
  this.style.display = 'none';
  tallyRenders=0;
  maxNumberOfImageSetsDisplayed=5;
  chartContainer.style.visibility = 'hidden';
  threeNewImages();
}

// Update and Retrieve Local Storage
function checkLocalStorageExistance(){
  if(window.localStorage.length !== 0) {
    storedProductData = localStorage.getItem('Product Interaction Data');
    productData = JSON.parse(storedProductData);
    for (i=0; i < productData.length; i++) {
      //update clicks and displays on page load from storage data
      productsArray[i].display = productData[i].display;
      productsArray[i].clicked = productData[i].clicked;
    }

  }
}

function updateLocalStorage (){
  storedProductData = JSON.stringify(productsArray);
  localStorage.setItem('Product Interaction Data',storedProductData);
}

// Call Functions on page load
checkLocalStorageExistance();
renderThreeImages();
imgEventListener();

// Add Event Handlers
resultButton.addEventListener('click',showChartResults);
againButton.addEventListener('click',restartGame);
