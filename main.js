var image1 = document.getElementById("image1");
var texte1 = document.getElementById("texte1");

var image2 = document.getElementById("image2");
var texte2 = document.getElementById("texte2");

var image3 = document.getElementById("image3");
var texte3 = document.getElementById("texte3");

image1.addEventListener("click", function () {
  if (texte1.style.display === "none" || texte1.style.display === "") {
    texte1.style.display = "block" && "flex";
  } else {
    texte1.style.display = "none";
  }
});

image2.addEventListener("click", function () {
  if (texte2.style.display === "none" || texte2.style.display === "") {
    texte2.style.display = "block" && "flex";
  } else {
    texte2.style.display = "none";
  }
});

image3.addEventListener("click", function () {
  if (texte3.style.display === "none" || texte3.style.display === "") {
    texte3.style.display = "block" && "flex";
  } else {
    texte3.style.display = "none";
  }
});
