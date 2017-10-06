
function UserAction() {
    var xhttp = new XMLHttpRequest();
    var url = "http://localhost:8080/greeting";
    var name = document.getElementById('name').value;
    if(name !== undefined && name !== "") {
        url += "?name=" + name;
        console.log("url: " + url);
        xhttp.open("POST", url, false);
        xhttp.setRequestHeader("Content-type", "application/json");
        xhttp.send();
        var response = JSON.parse(xhttp.responseText);
        console.log("response: " + JSON.stringify(response));
        document.getElementById('greeting').innerHTML = response.content;
    }
    else {
        console.log("name is undefined");
    }
}

function changeColor(newColor) {
          var elem = document.getElementById('para');
          elem.style.color = newColor;
}


//MEMORY
var score = 0;
var currentImage = "";
var previousImage = "";
var counter = 0;

function changeImage(i) {
      switch (i) {
          case 'A':
            currentImage = "media/steps.JPG";
            document.getElementById("steps").src = "media/steps.JPG";
            checkIfSame();
            previousImage = currentImage;
            break;
          case 'B':
            currentImage = "media/bed.jpg";
            document.getElementById("bed").src = "media/bed.jpg";
            checkIfSame();
            previousImage = currentImage;
            break;
          case 'C':
            currentImage = "media/big.jpg";
            document.getElementById("big").src = "media/big.jpg";
            checkIfSame();
            previousImage = currentImage;
            break;
          case 'D':
            currentImage = "media/big.jpg";
            document.getElementById("big2").src = "media/big.jpg";
            checkIfSame();
            previousImage = currentImage;
            break;
          case 'E':
            currentImage = "media/steps.JPG";
            document.getElementById("steps2").src = "media/steps.JPG";
            checkIfSame();
            previousImage = currentImage;
            break;
          case 'F':
            currentImage = "media/bed.jpg";
            document.getElementById("bed2").src = "media/bed.jpg";
            checkIfSame();
            previousImage = currentImage;
            break;
          default:
            console.log('Invalid item');
            break;
      }
}

function refresh() {
    //all pictures
    var pictures = document.querySelectorAll(".refresh");
    score = 0;
    currentImage = "";
    previousImage = "";
    counter = 0;
    return function() {
        for (var i = 0; i < pictures.length; i++) {
                pictures.item(i).src = "media/blossoms.JPG";
        }
    }
}

function refreshButton() {
    setTimeout(refresh(), 0);
}

function checkIfSame() {
    if (counter == 1) {
        if (currentImage == previousImage) {
            score = score++;
            counter = 0;
            //console.log("same!");
        } else {
            setTimeout(refresh(), 500);
            //console.log("not same!");
        }
    } else {
        counter++;
    }
}