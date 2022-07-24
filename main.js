sound1="";
sound2="";
leftWristX="";
leftWristY="";
rightWristX="";
rightWristY="";

function preaload(){
    sound1=loadSound("music.mp3");
    sound2=loadSound("music2.mp3");
}

function setup(){
    canvas=createCanvas(600,500);
    canvas.center();

    video=createCapture(VIDEO);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded)
    posenet.on("pose",gotPoses)
}

function draw(){
    image(video,0,0,600,500);
}

function modelLoaded(){
console.log("Posenet is initialized");
}

function gotPoses(results){
    if(results.length>0){
        leftWristX=results[0].pose.leftWrist.x;
        leftWristY=results[0].pose.leftWrist.y;
        rightWristX=results[0].pose.rightWrist.x;
        rightWristY=results[0].pose.rightWrist.y;


console.log("left wrist x=" +leftWristX+",left wrist y= " +leftWristY);
console.log("right wrist x="+rightWristX+",right wrist y="+rightWristY);

    }
}