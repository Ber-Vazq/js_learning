//issue: want to create an analogous color scheme automatically
//requires three colors, next to eachother on color wheel/rgb values

function colorChange() {
    let red = Math.floor(Math.random() * 256);
    let green = Math.floor(Math.random() * 256);
    let blue = Math.floor(Math.random() * 256);
    let color = "rgb(" + red + "," + green + "," + blue + ")";
    document.getElementById("body").style.backgroundColor = color;
    document.getElementById("hexcode").innerText = color;
    console.log("color has been flipped " + color);
}