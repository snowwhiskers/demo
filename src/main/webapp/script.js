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