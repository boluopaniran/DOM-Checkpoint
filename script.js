function done() {
  var h1 = document.getElementById("h1");
  h1.innerText = "The botton has been clicked";
}
var button = document.getElementById("click");
button.onclick = done;
