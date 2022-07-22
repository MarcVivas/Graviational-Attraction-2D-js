
let particles = [];

function setup(){
    createCanvas(windowWidth, 800);

    // Create light particles
    for (let i = 0; i < random(10, 40); i++) {
        let pos = createVector(random(windowWidth/2, windowWidth/4), random(0, 800));
        let vel = createVector(random(-100, 100), random(-100, 100));
        vel.setMag(random (1, 1.45));
        let mass = random(1, 15);
        let diam = random(3, 15);
        particles.push(new Particle(pos.x, pos.y, mass, diam, [random(70, 255), random(70, 255), random(70, 255)], vel.x, vel.y))
    }
    
    // Heavy particle
    particles.push(new Particle(width/2, height/2, 100000, 50, [random(70, 255), random(70, 255), random(70, 255)], 0,0));

    

}

// Resize canvas if window has been resized
function windowResized() {
    resizeCanvas(windowWidth, 800);
}

// Execute this function every frame
function draw(){
    background(0, 30);
    for(let index = 0; index < particles.length; index++){
        
        
        handleGravity(index);

        particles[index].draw();
        
        particles[index].move();
       

      
    }
}

// The current particle attracts the rest of the particles
function handleGravity(index){
    for (let i = 0; i < particles.length; i++) {
        if(i != index){
            particles[index].attract(particles[i], 0.01);

        }
    }
}

// If the mouse is pressed on the canvas, then create a new particle
function mousePressed(){
    if(mouseX < width && mouseX > 0 && mouseY < height && mouseY > 0){
        let vel = createVector(random(-100, 100), random(-100, 100));
        vel.setMag(random (1, 1.45));
        vel.rotate(PI/2)
        let mass = random(1, 15);
        let diam = random(3, 15);
        particles.push(new Particle(mouseX, mouseY, mass, diam, [random(70, 255), random(70, 255), random(70, 255)], vel.x, vel.y))
    }

   
}
