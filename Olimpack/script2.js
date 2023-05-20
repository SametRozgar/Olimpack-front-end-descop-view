// JavaScript kodu
function showPhotos(n) {
    // tüm fotoğraf konteynerlarını gizle
    var containers = document.getElementsByClassName("photo-container");
    for (var i = 0; i < containers.length; i++) {
      containers[i].classList.remove("show");
    }
  
    // ilgili fotoğraf konteynerını göster
    var container = document.getElementById("photos-" + n);
    container.classList.add("show");
  }
  var menuBtn = document.getElementById("menuBtn");
  var menu = document.getElementById("menu");
  
  menuBtn.addEventListener("click", function() {
    if (menu.style.maxHeight) {
      menu.style.maxHeight = null;
      menu.style.display = "none";
    } else {
      menu.style.display = "block";
      menu.style.maxHeight = menu.scrollHeight + "px";
    }
  });