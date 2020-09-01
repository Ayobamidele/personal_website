function myFunction() {
	document.getElementById("myDropdown").classList.toggle("show");
	}
	
	window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	
	var dropdowns = document.getElementsByClassName("dropdown-content");
	var i;
	for (i = 0; i < dropdowns.length; i++) { var openDropdown=dropdowns[i]; if (openDropdown.classList.contains('show')) {
		openDropdown.classList.remove('show'); } } } }
	
	var modal = document.getElementById('id01');
	
			// When the user clicks anywhere outside of the modal, close it
			window.onclick = function (event) {
				if (event.target == modal) {
					modal.style.display = "none";
				}
			}

//  var slideIndex = 0;
// showSlides();

// function showSlides() {
// 	var i;
// 	var slides = document.getElementsByClassName("myslides");
// 	var dots = document.getElementsByClassName("dot");
// 	for (i = 0; i < slides.length; i++) {
// 	slides[i].style.display = "none";  
// 	}
// 	slideIndex++;
// 	if (slideIndex > slides.length) {slideIndex = 1}    
// 	for (i = 0; i < dots.length; i++) {
// 	dots[i].className = dots[i].className.replace(" dotactive", "");
// 	}
// 	slides[slideIndex-1].style.display = "block";  
// 	dots[slideIndex-1].className += " dotactive";
// 	setTimeout(showSlides, 2000); // Change image every 2 seconds
// }
var myIndex = 0;
carousel();

function carousel() {
	var i;
	var x = document.getElementsByClassName("textslide");
	for (i = 0; i < x.length; i++) {
		// x[i].style.display = "none";  
		x[i].className = x[i].className.replace(" textactive", "");
	}
	myIndex++;
	if (myIndex > x.length) {myIndex = 1}    
		x[myIndex-1].className += " textactive";
		setTimeout(carousel, 3000); // Change image every 3 seconds
}