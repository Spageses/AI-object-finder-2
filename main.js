video="";
status = "";
objects = [];

function preload(){
    video = createVideo('video.mp4');
    video.hide();
}

function setup(){
    canvas = createCanvas(500,380);
    canvas.center();
}

function start(){
    objectDetector= ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status : Detecting Objects";
    
}

function modelLoaded(){
    console.log("Model Loaded");
    status= true;
    video.speed(1);
    video.volume(0);
    video.loop();
}

function gotResult(error, result){
    if(error){
        console.error();
    }
    console.log(result);
    objects = result;
}

function draw(){
    
}