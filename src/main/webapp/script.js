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

function changeImage(i) {

      switch (i) {
          case 'A':
            document.getElementById("steps").src = "media/steps.JPG";
            break;
          case 'B':
            document.getElementById("bed").src = "media/bed.jpg";
            break;
          case 'C':
            document.getElementById("big").src = "media/big.jpg";
            break;
          case 'D':
            document.getElementById("big2").src = "media/big.jpg";
            break;
          case 'E':
            document.getElementById("steps2").src = "media/steps.JPG";
            break;
          case 'F':
            document.getElementById("bed2").src = "media/bed.jpg";
            break;
          default:
            console.log('Invalid item');
            break;
      }


    /*console.log('src1: ' + document.getElementById("back").src);
    console.log('src2: ' + "media/blossoms.JPG");
    if (document.getElementById("back").src == "media/blossoms.JPG") {
            document.getElementById("back").src = "media/steps.JPG";
    } else {
            document.getElementById("back").src = "media/bed.jpg";
    }*/
}

function refresh() {
    var pictures = document.querySelectorAll(".refresh");
    //console.log(pictures);
    for (var i = 0; i < pictures.length; i++) {
        pictures.item(i).src = "media/blossoms.JPG";
    }
}