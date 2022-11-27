function setup() {
    createCanvas(1900, 1000, WEBGL);
  }
  
  function draw() {
    background(0);

    let locX = mouseX - height / 2;
    let locY = mouseY - width / 2;
  
    ambientLight(120);
    directionalLight(255, 100, 0, 0.25, 0.70, 0);
    pointLight(0, 100, 255, locX, locY, 250);
  
    translate(width / 100000, -170, 0);
    rotateZ(frameCount * 0.02);
    rotateX(frameCount * 0.02);
    ambientMaterial(250);
    sphere(150, 64);

    push();
    translate(-width / 7, 0, 0);
    rotateZ(frameCount * 0.02);
    rotateX(frameCount * 0.02);
    specularMaterial(250);
    sphere(50, 64);
    pop();
  
    point(300, 200);
    stroke('white');
    strokeWeight(10);

    point(350, 250);
    stroke('white');
    strokeWeight(10);
    
}