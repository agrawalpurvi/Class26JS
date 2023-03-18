class Circle{
    constructor(x,y,color,size){
        this.x=x;
        this.y=y;
        this.color=color;
        this.size=size;
    }

    display(){
        fill(this.color);
        circle(this.x,this.y,this.size);
    }
        
    
}

