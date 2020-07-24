
function getAbilities() {
    fetch('https://pokeapi.co/api/v2/ability/')
    .then(
    function(response) {
        if (response.status !== 200) {
        console.log('Looks like there was a problem. Status Code: ' +
            response.status);
        return;
        }

        // Examine the text in the response
        response.json().then(function(data) {
        console.log(data);
        for (let i = 0; i < 200; i++) {
            console.log(
            (document.querySelector("#resp").innerHTML = data.results[i].name)
            );

            let para = document.createElement("P"); // Create a <p> element
            para;
            para.className = "alert alert-danger col-md-8";
            para.innerText = `Ability Name: ${(document.querySelector("#resp").innerHTML = data.results[i].name)}`;

            let myDiv = document.getElementById("todos");
            myDiv.appendChild(para);
        }
        });
    }
    )
    .catch(function(err) {
    console.log('Fetch Error :-S', err);
    });
}
