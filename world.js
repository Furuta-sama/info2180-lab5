window.onload = function(){
    let button = document.getElementById('lookup');
    let button2 = document.getElementById('lookup-cities');

    button.addEventListener('click', function(){
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var countries = JSON.parse(this.response);

                var col = ["Name", "Continent", "Independence", "Head of State"];
                var column = ["name", "continent", "independence_year", "head_of_state"];

                console.log(countries[0]);

                var table = document.createElement("table");
                var tr = table.insertRow(-1);                   // TABLE ROW.

                for (var i = 0; i < col.length; i++) {
                    var th = document.createElement("th");      // TABLE HEADER.
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }

                for (var i = 0; i < countries.length; i++) {

                    tr = table.insertRow(-1);
        
                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = countries[i][column[j]];
                    }
                }

                var result = document.getElementById('result');
                result.appendChild(table);
            }            
        }
        
        var queryString = "";

        if(document.getElementById("country").value == ""){
            queryString = "";
        }
        else{
            queryString = "?country=" + document.getElementById("country").value;
        }

        httpRequest.open("GET", "http://localhost:8080/world.php" + queryString, true);
        httpRequest.send();
    })

    button2.addEventListener('click', function(){
        var httpRequest = new XMLHttpRequest();
        httpRequest.onreadystatechange = function(){
            if (this.readyState == 4 && this.status == 200) {
                var countries = JSON.parse(this.response);

                var col = ["Name", "District", "Population"];
                var column = ["name", "district", "population"];

                var table = document.createElement("table");
                var tr = table.insertRow(-1);                   // TABLE ROW.

                for (var i = 0; i < col.length; i++) {
                    var th = document.createElement("th");      // TABLE HEADER.
                    th.innerHTML = col[i];
                    tr.appendChild(th);
                }

                for (var i = 0; i < countries.length; i++) {

                    tr = table.insertRow(-1);
        
                    for (var j = 0; j < col.length; j++) {
                        var tabCell = tr.insertCell(-1);
                        tabCell.innerHTML = countries[i][column[j]];
                    }
                }

                var result = document.getElementById('result');
                result.appendChild(table);
            }            
        }
        
        var queryString = "";

        if(document.getElementById("country").value == ""){
            queryString = "";
        }
        else{
            queryString = "?country=" + document.getElementById("country").value + "&context=cities";
        }

        httpRequest.open("GET", "http://localhost:8080/world.php" + queryString, true);
        httpRequest.send();
    })
}