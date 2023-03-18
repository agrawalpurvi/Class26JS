var circle_filling=false;
var circle_size=0;
var circle_color;


const circles=[];


function setup(){
    createCanvas(400,400);

    circle_color=color(random(255), random(255), random(255));

    strokeWeight(2);

}

function draw(){
    background("blue");

    if(circle_filling){
        circle_size+=2;
        var overlapping_circle=over_lapping_circles();
        if(overlapping_circle){
            circle_filling=false;
            circles.splice(circles.indexOf(overlapping_circle),1);
        }
        if(edge_circles()){
            circle_filling=false;
        }
        fill(circle_color);
        circle(mouseX,mouseY,circle_size);
    }
    for(var i of circles){
        i.display();
    }

}

function mousePressed(){
    circle_size=0;
    circle_color=color(random(255), random(255),random(255));
    circle_filling=true;
}

function mouseReleased(){
    if(circle_filling){
        circles.push(new Circle(mouseX,mouseY,circle_size,circle_color));
    }

    circle_filling=false;
}

function edge_circles(){
    return mouseX<circle_size/2 || mouseX>width-circle_size/2 || mouseY<circle_size/2 || mouseY>height-circle_size/2;
}

function over_lapping_circles(){
    for(var i of circles){
        if(dist(i.x,i.y,mouseX,mouseY)<circle_size/2 +i.size/2 +2){
            return i;
        }

    }
    return undefined;
}
