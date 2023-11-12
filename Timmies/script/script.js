//function to change hero slider img
var btns = document.getElementsByClassName("carousel-btn");
function display(page){
    var pages = document.getElementsByClassName("carousel");
    for(i=0; i < pages.length; i++){
        //hide all pages
        pages[i].style.display = "none";
        btns[i].className = btns[i].className.replace(" active", "");
    }
    //then change the current img to display: block to unhide it
    pages[page].style.display = "block";
    btns[page].className += " active";
    console.log("Active carousel = " + page);
}
if(btns && btns.length != 0){
    btns[0].onclick = function(){display(0)};
    btns[1].onclick = function(){display(1)};
    btns[2].onclick = function(){display(2)};
    //show page 1 image by default
    display(0); 
}


//function to toggle the vertical navbar
var menuBtn = document.getElementById("hamburger-icon");
function toggleMenu(){
    var links = document.getElementById("nav-links");
    if (links.style.display === "block"){
        //change the icon to bars
        menuBtn.className = "fa fa-bars";
        links.style.display = "none";
        console.log("hide the menu");
    }
    else {
        //change the icon to a cross
        menuBtn.className = "fa fa-close";
        links.style.display = "block";
        console.log("show the menu");
    }
}
if(menuBtn){
    menuBtn.onclick = function(){toggleMenu()};
}


//function to set the width of the subscribeEmail input based on the placeholder length
var subscribeEmail = document.getElementById("subscribe-email");
if(subscribeEmail){
    subscribeEmail.setAttribute('size', subscribeEmail.getAttribute('placeholder').length * 0.8);
}


//function to show alert msg when user add/remove items from shopping cart
const addToCartCheckboxes = document.getElementsByClassName('add-to-cart-checkbox');
console.log(addToCartCheckboxes.length);
if(addToCartCheckboxes && addToCartCheckboxes.length != 0){
    console.log(addToCartCheckboxes.length);
    for(var checkbox of addToCartCheckboxes){
        checkbox.addEventListener('change', function() {
            if (this.checked) {
                // Logic to add the item to the cart (e.g., store the product details in an array)
                alert('Product added to the cart!');
            } else {
                // Logic to remove the item from the cart (if applicable)
                alert('Product removed from the cart!');
            }
        });
    }
}
else{
    console.log("cannot select the cb");
}


//function to expand/collapse sections on about page
var aboutSections = document.getElementsByClassName("section-container");
var sectionIcons = document.getElementsByClassName("section-icon");
function toggleSection(n){
    if(aboutSections[n].style.display === "block"){
        aboutSections[n].style.display = "none";
        console.log("hide");
        sectionIcons[n].className = sectionIcons[n].className.replace("fa-angle-up", "fa-angle-down");
    }
    else{
        aboutSections[n].style.display = "block";
        console.log("show");
        sectionIcons[n].className = sectionIcons[n].className.replace("fa-angle-down", "fa-angle-up");
    }
}
if(aboutSections.length != 0 && sectionIcons.length != 0){
    sectionIcons[0].onclick = function(){toggleSection(0)};
    sectionIcons[1].onclick = function(){toggleSection(1)};
    sectionIcons[2].onclick = function(){toggleSection(2)};
    toggleSection(0);
}