nosex=0;
nosey=0;
leftwristx=0;
rightwirstx=0;
difference=0;


function setup(){
    video = createCapture(VIDEO);
    video.size(750, 800);

    canvas = createCanvas(800, 750);
    canvas.position(860.500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet Is Initialized!')
}

function draw(){
    background('#969A97');
    stroke("black")
   textSize(difference)
   text("sachit", nosex,nosey)
}

function gotPoses(results){
    if(results.length> 0)
    {
        console.log(results);
        nosex= results[0].pose.nose.x
        nosey= results[0].pose.nose.y
        leftwristx= results[0].pose.leftWrist.x
        rightwristx= results[0].pose.rightWrist.x;
        difference=floor(leftwristx-rightwristx);
        console.log("nosex="+nosex)
        console.log("nosey="+nosey)
        console.log("leftwristx="+leftwristx)
        console.log("rightwristx="+rightwristx)
        console.log("difference="+difference)
    }
}