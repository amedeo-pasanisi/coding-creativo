console.log('ciao');
let canvas = document.querySelector('canvas');
let context = canvas.getContext('2d');

context.fillStyle = 'blue';
context.fillRect(100, 100, 400, 400);

context.lineWidth = 4;
// context.beginPath();
// context.rect(250, 250, 100, 100);
// context.stroke();

// context.beginPath();
// context.arc(300, 300, 25, 0, Math.PI * 2); 
// context.stroke();

for (let i = 0; i < 5; i++) {
    for (let j = 0; j < 5; j++) {
        let width = 80;
        let height = 80;
        let gap = 20;
        let x = 100 + (width + gap) * i;
        let y = 100 + (height + gap) * j;
    
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
