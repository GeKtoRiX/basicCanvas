var htmlCanvas = document.getElementById('canvas');
htmlCanvas.style.backgroundColor = 'black';
var canvas = htmlCanvas.getContext('2d');

htmlCanvas.width = window.innerWidth - 4;
htmlCanvas.height = window.innerHeight - 4;
addEventListener('resize', () => {
    htmlCanvas.width = window.innerWidth - 4;
    htmlCanvas.height = window.innerHeight - 4;
})

const mouse = {
    x: htmlCanvas.width,
    y: htmlCanvas.height,
}
addEventListener('mousemove', (event) => {
    mouse.x = event.clientX;
    mouse.y = event.clientY;
})

class Circle {
    constructor(x, y, radius, color) {
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.color = color;
    }

    draw() {
        canvas.beginPath();
        canvas.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        canvas.fillStyle = this.color;
        canvas.fill();
        canvas.closePath();
    }

    update() {
        this.draw();
    }
}

function animate() {
    canvas.clearRect(0, 0, htmlCanvas.width, htmlCanvas.height);
    console.log('test animate');
    requestAnimationFrame(animate);
}
//animate();