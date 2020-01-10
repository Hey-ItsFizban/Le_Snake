class Snake{

    constructor() {
        this.body = [];
        this.body[0] = createVector(0, 0);
        this.x_direction = 1;
        this.y_direction = 0;
        this.width = 1;
    }

    setDirection(x, y) {
        this.x_direction = x;
        this.y_direction = y;
    }

    // Prevent reverse direction
    get_current_direction() {
        if (this.x_direction === 0) {
            return (this.y_direction === 1 ? 'down' : 'up');
        }
        else {
            return (this.x_direction === 1 ? 'right' : 'left');
        }
    }

    get_head_position() {
        return this.body[this.body.length - 1].copy();
    }

    nom_nom(nommable) {
        let x = this.get_head_position().x;
        let y = this.get_head_position().y;
        if(x === nommable.x && y === nommable.y) {
            this.grow();
            return true;
        }
        return false;
    }
    
    grow() {
        let head = this.get_head_position();
        this.body.push(head);
    }
    
    snake_collision() {
        let head = this.get_head_position();
        for (let i = 0; i < this.body.length - 1; i++) {
            let segment = this.body[i];
            if (segment.x === head.x && segment.y === head.y) {
                return true;
            }
        }
        return false;
    }

    wall_collision() {
        let x = this.get_head_position().x;
        let y = this.get_head_position().y;
        if (x > w - 1 || x < 0 || y > h - 1 || y < 0) {
            return true;
        }
        return false;
    }

    has_collided() {
        return (this.snake_collision() || this.wall_collision());
    }

    update() {
        let head = this.get_head_position();
        this.body.shift();
        head.x += this.x_direction;
        head.y += this.y_direction;
        this.body.push(head);
    }
    
    show() {
        for (let i = 0; i < this.body.length; i++) {
            noStroke();
            colorMode(HSB);
            fill((100 + 40 * i) % 360, 100, 95);
            rect(this.body[i].x, this.body[i].y, this.width, this.width);
        }
    }
}