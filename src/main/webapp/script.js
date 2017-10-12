
var imagesArr = ["media/bed.jpg", "media/big.jpg"];


//MEMORY
var score = 0;
var currentImage = {};
var previousImage = {};
var counter = 0;
var randomImg = [];


function refresh() {
    console.log("refresh()");

    // create random images array
    var images = document.getElementsByTagName("img");

    for(var j=1; j<=images.length; j++) {
        randomImg[j] = {id: j, image: ""};
        randomImg[j].done = false;
        randomImg[j].image = imagesArr[Math.floor(Math.random() * (imagesArr.length))];
    }


    for (var i=0; i<images.length; i++) {
        var img = images[i];

        img.addEventListener("click", function() {
            document.getElementById(this.id).src = randomImg[this.id].image;

            currentImage = randomImg[this.id];
            checkIfSame();
            previousImage = currentImage;
        });
    }

    hideCats();
}

function hideCats() {
    for (var i=1; i<randomImg.length; i++) {
        if(!randomImg[i].done) {
            document.getElementById(randomImg[i].id).src = "media/blossoms.JPG";
        }
    }
}

function checkIfSame() {
    if(previousImage.image) {
        if (currentImage.image === previousImage.image) {
            score++;
            // console.log("same!");
            previousImage.done = true;
            currentImage.done = true;

        }
        else {
            setTimeout(hideCats, 1000);
            // console.log("not same!");
        }
    }
}