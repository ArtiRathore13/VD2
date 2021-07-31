//Create variables here
var dog, dogImg, happydog,database, foodS , foodStock;
var lastFed, feedTime;
var foodObj;
function preload()
{
	//load images here
  happydog = loadImage("images/dogImg1.png");
  dogImg = loadImage("images/dogImg.png");
  
}

function setup() {
	createCanvas(500, 500);

 dog = createSprite(250,250,20,20);
dog.addImage(dogImg);
dog.scale = 0.25;

  database = firebase.database();
  foodStock = database.ref("food");
  foodStock.on("value", readStock);
  
  milk1 = new Food();

  feed = createButton("feed the dog");
  feed.position(500,100);
  feed.mousePressed(Feedfood);
  
addfood = createButton("add milk");
addfood.position(600,100);
//addfood.mousePressed(addFoood);

}


function draw() {  
  background("green")
  fill(255,255,254)
  textSize(15) 
  if(lastFed>=12){
  text("Last Feed : "+ lastFed%12+ "Pm",100,30);
  }else if(lastFed==0){
    text("Last Feed :12 AM",350,30);
  }else{
    text("Last Feed" + lastFed +"AM",180,30);
  }
  
  
  
  

  // if(keyWentDown(UP_ARROW)){
  //   writeStock(foodS)
  //   dog.addImage(happydog)
  // }
  drawSprites();
  //add styles here
milk1.display();
}


function readStock(data){
foodS = data.val();
milk1.updateFoodStock(foodS);
}


// function writeStock(x){
// if(x<=0){
//   x=0;
// }else{
//   x=x -1
// }

// database.ref('/').update({
//   food:x
// })

// }

function Feedfood(){
dog.addImage (happydog);
console.log("Hello1")
milk1.updateFoodStock(milk1.getFoodStock() - 1);
console.log("Hello2")
database.ref('/').update({
  food:milk1.getFoodStock(),
  feedTime:hour()
})
}

function addfoood(){
  foodS++
  database.ref('/').update({
    food:foodS
  })
}



