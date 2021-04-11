let x = 800,
    y = 0;
let gameover = false;

function update() {
    if (gameover) return;

    if (isKeyPressed[83]) y++;

    x -= 1;

    if (x <= -50) x = 800;
};

function draw() {
    drawImage(bird, 20, 300, 80, 80)
    drawImage(tubes, x, y, 2040, 600)
};

function keyup(key) {

};

function mouseup() {

};