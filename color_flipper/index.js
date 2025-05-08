//issue: want to create an analogous color scheme automatically
//requires three colors, next to eachother on color wheel/rgb values

function colorChange() {
    var randomColor = "#000000".replace(/0/g,function(){return (~~(Math.random()*16)).toString(16);});
    document.getElementById("body").style.backgroundColor = randomColor;
    document.getElementById("hexcode").innerText = randomColor;
    console.log("color has been flipped " + randomColor);
}