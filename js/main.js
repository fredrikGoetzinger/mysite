
// A function to change content of an element defined by the id with the text at the file location.
function replaceHtml(id, file){
    
    var xhttp = new XMLHttpRequest();

    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
        // replace the content of the element with id "id" with the response:
        document.getElementById(id).innerHTML = xhttp.responseText;
        }
    };
    xhttp.open("GET", file, true);
    xhttp.send();    
}
