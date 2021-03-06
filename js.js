
const loadImage = path =>
    new Promise(resolve => {
        const img = new Image();
        img.onload = () => resolve(img);
        img.onerror = () => {throw "image load failed"};

        img.src = path;
    });



function update() {
	var canvas = document.getElementById('canvas');
	var ctx = canvas.getContext("2d");
	var font = document.getElementById('font').value;

	ctx.clearRect(0, 0, canvas.width, canvas.height);

    let xPos = 0;
	for (let c of document.getElementById('in_text').value) {
		let thisXPos = xPos;
		c = c.toUpperCase();
		if (c>='A' && c <= 'Z')
		  loadImage('font_src/'+font+'/'+c.toUpperCase()+'.jpg').then(i => ctx.drawImage(i, thisXPos, 0, 100, 100));
	    xPos += 100;
	}
};


document.getElementById('in_text').onchange = update;
document.getElementById('font').onchange = update;

