import style from './main.css';
const { noise } = require('@chriscourses/perlin-noise');
const htmlCanvas = document.getElementById('canvas');
const canvas = htmlCanvas.getContext('2d');

htmlCanvas.width = window.innerWidth - 4;
htmlCanvas.height = window.innerHeight - 4;
addEventListener('resize', () => {
    htmlCanvas.width = window.innerWidth - 4;
    htmlCanvas.height = window.innerHeight - 4;
})
var mouse = {
    x: htmlCanvas.width / 2,
    y: htmlCanvas.height / 2,
}

addEventListener('mousemove', (params) => {
    mouse.x = params.clientX;
    mouse.y = params.clientY;
})


class Circle {
    constructor(x, y, radius, color, offset) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.offset = offset;
        this.color = color;

    }

    draw() {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 180, false);
        canvas.fillStyle = this.color;
        canvas.fill();
        canvas.closePath();
    }

    update() {
        this.draw();
    }
}
const circles = [];

for (let i = 0; i < 100; i++) {
    circles.push(new Circle(-30, -30, `25`, `hsl(${Math.random() * 360},50%,50%)`, i * 0.01));
}

let time = 0;
function animate() {
    canvas.fillStyle = 'rgba(0, 0, 0, 0.01)';
    canvas.fillRect(0, 0, htmlCanvas.width, htmlCanvas.height);
    circles.forEach((circle) => {
        circle.update();
        circle.x = noise(time + circle.offset + 20) * htmlCanvas.width;
        circle.y = noise(time + circle.offset) * htmlCanvas.height;
    });
    time += 0.005;
    requestAnimationFrame(animate);
}
animate();

