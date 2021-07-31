class Food{
    constructor(){
        this.foodStock = 0
        this.image = loadImage("images/Milk.png")
    }

    getFoodStock(){
        foodStock = this.foodStock;
    }

    updateFoodStock(fs){
   this.foodStock = fs;
    }

    deductfood(){
        if(this.foodStock>0){
            this.foodStock = this.foodStock-1
        }
     }

display(){
   var x=50,y=100;
    //console.log(this.foodStock);
    imageMode(CENTER)
    image(this.image,x,y,50,50);

   if(this.foodStock !=0){
        for(var i=0;i<this.foodStock;i++){
            if(i%10==0){
                x=80;
                y=y+30
            }
            image(this.image,x,y,30,30);
            x=x+20;
        }
    }
}
}