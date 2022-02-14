//JS <-----JS CODE----->
video = "";
detected = "";
input = "";

function setup() {
    canvas = createCanvas(700, 500);
    canvas.position(150, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function start() {
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    input = document.getElementById("object_name").value;
    console.log(input);
}

function modelLoaded() {
    console.log("M-M-Model H-H-Has B-B-Been L-L-L-Loaded!!!!!");
    detected = true;
}

function draw() {
    image(video, 0, 0, 700, 500);
}
