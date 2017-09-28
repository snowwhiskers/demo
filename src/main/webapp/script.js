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
var currentImage  ;

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




function changeImage(int order) {

      switch (order) {
          case '1':
            document.getElementById("first").src = "media/steps.JPG";
            break;
          case '2':
            console.log('Limes are $1.49');
            break;
          case '3':
            console.log('Papayas are $1.29');
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