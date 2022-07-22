class Particle{
    constructor(x, y, mass, diameter, color, vel_x, vel_y){
        this.pos = createVector(x, y);
        this.diameter = diameter;
        this.radius = this.diameter/2;
        this.color = color;
        this.velocity = createVector(vel_x, vel_y)
        this.mass = mass;
        this.acceleration = createVector(0, 0);
       
    }

    applyForce(force){
        this.acceleration.add(p5.Vector.div(force, this.mass)); // Acceleration = force / mass 
    }



    // Moves the particle to the next position deppending on acceleration and velocity
    move() {
        if(frameRate() > 0){
            this.velocity.add(this.acceleration);
            this.pos.add(this.velocity);
            this.acceleration.set(0, 0);

        }

    }

    attract(otherParticle, G){
        let force = p5.Vector.sub(this.pos, otherParticle.pos); // Direction of the force
        let distance = constrain(force.magSq(), 2500, 100000);
        let strength = (G * (this.mass * otherParticle.mass)) / (distance); // Strength of the force
        force.setMag(strength); // Direction + Strength of the force
        otherParticle.applyForce(force);

    }

    

    // Collision detection with another particle
    isColliding(particle){
        return (dist(this.pos.x, this.pos.y, particle.pos.x, particle.pos.y) <= this.radius + particle.radius)
    }

    // Draw on the canvas the particle
    draw(){
        fill(this.color[0], this.color[1], this.color[2]);
        noStroke();
        ellipse(this.pos.x, this.pos.y, this.diameter, this.diameter);
    }

    // Setters
    set setVelX(vel){
        this.velocity.x = vel;
    }
    set setVelY(vel){
        this.velocity.y = vel;
    }

    // Getters
    get getVelX(){return this.velocity.x;}
    get getVelY(){return this.velocity.y;} 
}