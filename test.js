var status = "";
var objects = [];

function setup(){
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
}

function modelLoaded(){
    console.log("Model is loaded")
    status = true;
}

function draw(){
    image(video, 0, 0, 380, 380);
    if(status != ""){
        objectDetector.detect(video, getResults)
    }
    
}

function getResults(error, results){
    if(error){
console.error(error);
    } else {
console.log(results);
objects = results;
document.getElementById("object_name_display").innerHTML = objects[0].label;
    }
}
