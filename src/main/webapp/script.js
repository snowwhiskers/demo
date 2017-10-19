
//MEMORY
var imagesArr = ["media/bed.jpg", "media/big.jpg", "media/steps.JPG"];
var score = 0;
var currentImage = {};
var previousImage = {};
var counter = 0;
var randomImg = [];


function refresh() {
    // create random images array
    var images = document.getElementsByTagName("img");
    var needNew = true;
    for(var j=1; j<=images.length; j++) {
        // set id and empty img value
        randomImg[j] = {id: j, image: ""};

        // loops until the same picture doesn't show up more than twice
        while (needNew) {
            // create random image
            randomImg[j].image = imagesArr[Math.floor(Math.random() * (imagesArr.length))];
            // check it doesn't already exist more than once
            needNew = countImg(j);
        }
        needNew = true;


        // do we need this?
        //randomImg[j].done = false;
    }

    // when img is clicked, can this be a separate function...
    for (var i=0; i<images.length; i++) {
        var img = images[i];
        img.addEventListener("click", function() {
            counter++;
            //get id of clicked image and change img to randomImg with same id
            document.getElementById(this.id).src = randomImg[this.id].image;
            //set value of currentImage
            currentImage = randomImg[this.id];
            checkIfSame();
            previousImage = currentImage;
        });
    }

    hideCats();
}
// works!
// function for checking that each image shows up exactly twice
function countImg (index) {
    var matchCounter = 0;
        // start from one bc 0 is empty, finish before index bc don't need to check against itself
        for (var i=1; i<index; i++) {
           if (randomImg[i].image === randomImg[index].image) {
                matchCounter++;
           }
        }
    // one instance other than itself is allowed
    return (matchCounter > 1);
}

// works!
// function for hiding images
function hideCats() {
    //start with 1 bc randomImg[0] is empty
    for (var i=1; i<randomImg.length; i++) {
        // if false
        //if(!randomImg[i].done) {

            //hide cat
            document.getElementById(randomImg[i].id).src = "media/blossoms.JPG";

        //}
    }
}
//works!
// function for comparing images
function checkIfSame() {

    if (counter === 2) {
        //zero counter so it only checks the last two img
        counter = 0;
        // if they are the same
        if (currentImage.image === previousImage.image) {
            //increase score
            score++;

            // why do we need this?
            //previousImage.done = true;
            //currentImage.done = true;
        }
        // if not the same, hide all
        else {
            setTimeout(hideCats, 500);
            //need to also disable clicks while on timeout...
        }
    }
}