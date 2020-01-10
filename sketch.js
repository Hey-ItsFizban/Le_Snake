// Variables
let le_snake;
let nommable;
let resolution = 20;
let le_belly = 0;
// let le_width;/

// Functions
function setup() {
    w = floor(600 / resolution);
    h = floor(600 / resolution);
    createCanvas(w * resolution, h * resolution);
    frameRate(10);
    le_snake = new Snake();
    nommable = get_new_nommz();
}

function get_new_nommz() {
    nommable_location = [floor(random(w)), floor(random(h))];
    return new Nommable(nommable_location[0], nommable_location[1]);
}

function keyPressed() {
    switch (keyCode) {
        case UP_ARROW:
            if (le_snake.get_current_direction() === 'down') {
                console.log('Cannot reverse direction');
                break;
            }
            else {
                le_snake.setDirection(0, -1);
                break;
            }
        case DOWN_ARROW:
            if (le_snake.get_current_direction() === 'up') {
                console.log('Cannot reverse direction');
                break;
            }
            else {
                le_snake.setDirection(0, 1);
                break;
            }
        case RIGHT_ARROW:
            if (le_snake.get_current_direction() === 'left') {
                console.log('Cannot reverse direction');
                break;
            }
            else {
                le_snake.setDirection(1, 0);
                break;
            }
        case LEFT_ARROW:
            if (le_snake.get_current_direction() === 'right') {
                console.log('Cannot reverse direction');
                break;
            }
            else {
                le_snake.setDirection(-1, 0);
                break;
            }
    }
}

function draw() {
    scale(resolution);
    colorMode(RGB);
    background(5);

    if (le_snake.nom_nom(nommable)) {
        nommable = get_new_nommz();
        le_belly += 5;
        print(le_belly);
    }

    le_snake.update();
    le_snake.show();
    nommable.show();
    fill(255);
    textSize(1);
    text("You've Nommed: " + le_belly, w - 10, 1);

    
    if ((le_snake.has_collided())) {
        textSize(3);
        text('Ouchz', 10, 10);
        noLoop();
    }
}