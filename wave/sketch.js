var rects = [];



function setup() {
    rectMode(CENTER)
    createCanvas(600,400);
    colorMode(HSB);
    var h = random(360);

    rects = [];
    baseH = height/3;
    w = 30;
    rectCount = width/w;




    fill(255);

    for (var x = w/2; x < width; x += w){

        r = new sineRect(x,h);
        rects.push(r);

    }

    

    
}

function draw() {
        background(0);

    for (var i = 0; i < rects.length; i++){

        rects[i].show()
        rects[i].update()
        
        
            
        }



    }


    
  



class sineRect{

    constructor(x,h){
        this.x = x;
        this.h = h;
        this.fillC = color(h,100,100,1)
        this.index = int((x/w)+1)
        this.y = (this.index*height/rectCount);
        this.yChange = -4

    }
    
    
    show(){
        fill(this.fillC)
        rect(this.x,this.y,w-2,height/4);


    }

    update(){

        
        if ((this.y < 0) || (this.y  > height)){
        

            this.yChange = -this.yChange
            this.y += this.yChange
            this.h+=33;
            this.fillC = color(this.h%360,100,100,1)
            
        }
        else{
            this.y += this.yChange}



    }


}



