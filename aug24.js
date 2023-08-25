function query() {
  document.getElementById("link").innerHTML = "Facebook";
  const new_link = document.querySelector("a");
  new_link.href = "https://www.facebook.com/";
}
function by_id() {
  document.getElementById("text-id").innerHTML = "Cristian Fernandez";
}
function by_class() {
  var my_class = document.getElementsByClassName("text-class");
  for (var i = 0; i < my_class.length; i++) {
    my_class[i].innerHTML = "Cris";
  }
}
function by_tag() {
  var my_tag = document.getElementsByTagName("h4");
  for (var j = 0; j < my_tag.length; j++) {
    my_tag[j].innerHTML = "Fernandez";
  }
}
