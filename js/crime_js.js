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
        url: "https://raw.githubusercontent.com/ruichongliu/UsCrimeLookUp/master/FBI-Crime-Data/crimeByCity.json",
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
window.addEventListener("keydown", e => {
    var cityUser = inputbox.value
    if (cityUser.length > 4)
    {$( function() {
      $( "#inputbox" ).autocomplete({
        source: availableTags
      });
    } );}

})

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
    <th>City</th><th>Number</th><th>Index</th>
    <th>Rate</th><th>Ranking</th>
  </tr>
  <tr>
    <td>${cityUser}</td>
    <td>${cityData[cityUser]["Num"]}</td>
    <td>${cityData[cityUser]["Index"]}</td>
    <td>${cityData[cityUser]["Rate"]}</td>
    <td>${cityData[cityUser]["Ranking"]}</td>
  </tr>
</table>`
     }
 }})

console.log("v1.1.1 May 11 22:34");
