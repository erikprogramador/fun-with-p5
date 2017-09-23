let img = null;
let x = 0;
let y = 0;

function preload () {
    img = loadImage(`https://unsplash.it/${windowWidth}/${windowHeight}`);
}

function setup () {
    const canvas = createCanvas(img.width, img.height);
    x = (windowWidth - width) / 2;
    y = (windowHeight - height) / 2;
    canvas.position(x, y);
    image(img, 0, 0, img.width, img.height, 0, 0, img.width, img.height);
    filter(BLUR, 8);
    fill(255, 255, 255);
    let textFontSize = 72;
    textSize(textFontSize);
    text('HELLO P5', (windowWidth-(textFontSize*5))/2, windowHeight/2);
    textAlign(CENTER);
    textFont('Open Sans', 100);
}

function draw () {
    //
}

