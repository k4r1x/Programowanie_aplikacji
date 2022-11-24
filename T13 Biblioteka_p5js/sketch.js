function setup() {
    createCanvas(1600, 750, WEBGL);
    normalMaterial();
}

function draw() {
    background(200);
    if(mouseIsPressed) {
        rotateX(frameCount * -0.01);
        rotateY(frameCount * -0.01);
        box(100);
        rotateX(frameCount * 0.01);
        rotateY(frameCount * 0.01);
        translate(0, 100);
        box(100);
        translate(100, 0);
        box(100);
        translate(0, -100);
        box(100);
        translate(0, -100);
        box(100);
        translate(-100, 0);
        box(100);
        translate(-100, 0);
        box(100);
        translate(0, 100);
        box(100);
        translate(0, 100);
        box(100);
    }
    else{
        box(100);
        translate(0, 100);
        box(100);
        translate(100, 0);
        box(100);
        translate(0, -100);
        box(100);
        translate(0, -100);
        box(100);
        translate(-100, 0);
        box(100);
        translate(-100, 0);
        box(100);
        translate(0, 100);
        box(100);
        translate(0, 100);
        box(100);
    }
}