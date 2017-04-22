// DOM Interaction
var inputbox     = document.getElementById("inputbox")
var submitbtn    = document.getElementById("submitbtn");
var content      = document.getElementById("content");

var cityData
var availableTags = []

// Synchronous AJAX request to retrieve JSON
function getRemote() {
    return $.ajax({
        type: "GET",
        url: "http://www.minkoder.com/crime.json",
        async: false
    }).responseText;
}

// Data Retrival
cityData = JSON.parse(getRemote())

// Adjust autocomplete availableTags
for (var key in cityData){
    if (cityData.hasOwnProperty(key)) {
        availableTags.push(key);}
}

// autocomplete
$( function() {
  $( "#inputbox" ).autocomplete({
    source: availableTags
  });
} );


//Listen for submit
submitbtn.addEventListener("click",e => {
     var cityUser = inputbox.value;
     if (!cityUser) {e.preventDefault(); return}
     else {
         if (cityData.hasOwnProperty(cityUser))
         {
            content.innerHTML =
            `<table>
  <tr>
    <th>City</th><th>Crimal</th><th>Rate</th>
    <th>Index</th><th>City Ranking</th><th>Resident Ranking</th>
  </tr>
  <tr>
    <td>${cityUser}</td>
    <td>${cityData[cityUser]["Number"]}</td>
    <td>${cityData[cityUser]["Rate"]}</td>
    <td>${cityData[cityUser]["Index"]}</td>
    <td>${cityData[cityUser]["City Ranking"]}</td>
    <td>${cityData[cityUser]["Resident Ranking"]}</td>
  </tr>
</table>`
     }
 }})
