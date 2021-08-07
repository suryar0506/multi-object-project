var multi_objects = "";
var status = "";
var objects = [];

function preload(){
    multi_objects = loadImage("multiple_objects.jpg");
}

function setup(){
    canvas = createCanvas(800, 420);
    canvas.center();
    objectDetector = ml5.objectDetector('cocossd',modelLoaded)
}

function modelLoaded(){
    console.log("Model's good.");
    status = true;
    objectDetector.detect(multi_objects, getResult);
}

function getResult(error, result){
    if(error){
console.error(error);
    } else {
        console.log(result);
        objects = result;
    }
}

function draw(){
    if (status != ""){
image(multi_objects, 0, 0, 800, 420);

for(var i = 0;i<objects.length;i++){
    fill('red');
    stroke('red');
    textSize(30);
    strokeWeight(2);
    percentage = floor(objects[i].confidence * 100);
    text(objects[i].label + " " + percentage + "%", objects[i].x, objects[i].y);
    noFill();
    rect(objects[i].x, objects[i].y, objects[i].width, objects[i].height);
    document.getElementById("object_count").innerHTML = objects.length;
}
    }
}

