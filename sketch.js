function setup() {
    createCanvas(800, 800);
    background("white")
  }
  
  function draw() {
    stroke("white");
    fill("black");
    
    
    if (mouseIsPressed) {
      rect(mouseX, mouseY, 20, 35);
    }
  }