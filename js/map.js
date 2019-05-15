var mapLink = document.querySelector(".contacts-button-map");

var mapPopup = document.querySelector(".modal-map");
var mapClose = document.querySelector(".modal-map-close"); 

mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show");          
});

mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.remove("modal-show");               
});