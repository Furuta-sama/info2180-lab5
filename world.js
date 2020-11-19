window.onload = function(){
    let button = document.getElementById('lookup');

    button.addEventListener('click', function(){
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var result = document.getElementById('result');
                result.innerHTML = httpRequest.responseText;
            }            
        }
        
        var queryString = "?country=" + document.getElementById("country").value;
        httpRequest.open("GET", "http://localhost:8080/world.php" + queryString, true);
        httpRequest.send();
    })
}