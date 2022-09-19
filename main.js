status=""

function setup(){
    canvas = createCanvas(380 , 310)
    canvas.center()

    video = createCapture(VIDEO)
    video.hide()
}

function start(){
    objectDectector = ml5.objectDectector("cocossd" , modelloaded)
    document.getElementById("status").innerHTML="Detecting Objects:"
}

function draw(){
    image(video , 0 , 0 , 380 , 310)
}

function modelloaded(){
    console.log("modelloaded")
    status = true
}