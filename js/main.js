let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.lineWidth = 4;
const width = 80;
const height = 80;
const gap = 20;
let x, y;
for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        x = 100 + (width + gap) * i;
        y = 100 + (height + gap) * j;
    
        context.beginPath();
        context.rect(x, y, width, height);
        context.stroke();

        if (Math.random() > 0.5) {
            context.beginPath();
            context.rect(x + 10, y + 10, width - 20, height - 20);
            context.stroke();
        }
    }
}