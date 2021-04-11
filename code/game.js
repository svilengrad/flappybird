//Homework: making the bird to not look like its teleporting 

let y = 400;
let gameover = false;

let tube1X = 800, tube1Y = 0;
let tube2X = 800, tube2Y = 500;
let tube3X = 950, tube3Y = 0;
let tube4X = 950, tube4Y = 500;
let tube5X = 1100, tube5Y = 0;
let tube6X = 1100, tube6Y = 500;

function update() {
    if (gameover) return;
    y++;

    if(y < 0)y = 0;
    if(y > 520)y = 520;

    if (isKeyPressed[32]) y-=20;

    tube1X--;
    tube2X--;
    tube3X--;
    tube4X--;
    tube5X--;
    tube6X--;

    if(tube1X <= -50){
        tube1X = 800;
    }

    if(tube2X <= -50){
        tube2X = 800;
    }

    if(tube3X <= -50){
        tube3X = 800;
    }

    if(tube4X <= -50){
        tube4X = 800;
    }

    if(tube5X <= -50){
        tube5X = 800;
    }

    if(tube6X <= -50){
        tube6X = 800;
    }

    //Player and box 1
    if(areColliding(10, y, 80, 80, tube1X, 0, 50, 200))gameover = true;
    if(areColliding(10, y, 80, 80, tube2X, 0, 50, 200))gameover = true;
    if(areColliding(10, y, 80, 80, tube3X, 0, 50, 200))gameover = true;
    if(areColliding(10, y, 80, 80, tube4X, 0, 50, 200))gameover = true;
    if(areColliding(10, y, 80, 80, tube5X, 0, 50, 200))gameover = true;
    if(areColliding(10, y, 80, 80, tube6X, 0, 50, 200))gameover = true;
};

function draw() {
    drawImage(bird, 10, y, 80, 80)

    //Drawing tube number 1
    drawImage(box, tube1X, 0, 50, 200);

    //Drawing tube number 2
    drawImage(box, tube2X, 500, 50, 200);

    //Drawing tube number 3
    drawImage(box, tube3X, 0, 50, 200);

    //Drawing tube number 4
    drawImage(box, tube4X, 500, 50, 200);

    //Drawing tube number 5
    drawImage(box, tube5X, 0, 50, 200);
    
    //Drawing tube number 6
    drawImage(box, tube6X, 500, 50, 200);

};

function keyup(key) {

};

function mouseup() {

};