noseX = "";
noseY = "";



function preload(){

mustache = loadImage('https://i.postimg.cc/Nfcrd90d/m.png')

}

function setup(){

canvas = createCanvas( 425 , 425 );
canvas.center();
video = createCapture(VIDEO);
video.size(425 , 425);
video.hide();

posenet = ml5.posenet(video, modelloaded)
posenet.on('pose' , gotposes)

}

function draw(){

    image(video , 0 , 0  , 425 , 425)
    image(mustache , noseX , noseY , 30 , 30)

}

function snapshot(){

save("mustache.png");

}

function modelloaded(){

console.log("Model is Loaded")


}

function gotposes(results){

if(results.length > 0){

console.log(results);

noseX = results[0].pose.nose.x;
noseY = results[0].pose.nose.y;



console.log("nose x = " + results[0].posenet.nose.x);
console.log("nose y = " + results[0].posenet.nose.x);


}


}