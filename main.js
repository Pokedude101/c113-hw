


function preload(){

}




function setup(){
    canvas = createCanvas(640, 480);
    canvas.position(110, 250);
    video = createCapture(VIDEO);
    video.hide();
}


function draw(){
    image(video, 0, 0, 440, 300);
    circle(10, 10, 20);
    rect(19, 6, 409, 10)
    circle(436, 10, 20);

    circle(10, 300, 20);
    rect(19, 294, 409, 10)
    circle(436, 300, 20);

    rect(6, 19, 10, 273);
    rect(430, 19, 10, 273)
    tint("red");
    

}



