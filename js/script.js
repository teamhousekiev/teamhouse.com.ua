"use strct";

let tab = function () {
  
let tabNav = document.querySelectorAll(".tabs-nav__item"),
tabContent = document.querySelectorAll(".tab"),
   tabName; 
   tabNav.forEach(item =>{
       item.addEventListener('click',selectTabNav) 
       
   })
   function selectTabNav(params) {
       tabNav.forEach(item => {
           item.classList.remove('is-active');
       });

       this.classList.add('is-active');
       tabName = this.getAttribute('data-tab-name');
       selectTabContent(tabName);
   }
   function selectTabContent(tabName) {
       tabContent.forEach(item=> {
           item.classList.contains(tabName)? item.classList.add('is-active'): item.classList.remove('is-active');
       })
   }
   

   
};
tab();

filterSelection("all")
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("column");
  if (c == "all") c = "";
    for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}


function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var btnContainer = document.getElementById("myBtnContainer");
var btns = btnContainer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function(){
    var current = document.getElementsByClassName("active");
    current[0].className = current[0].className.replace(" active", "");
    this.className += " active";
  });
}



/// SLIDER

const img = document.querySelectorAll('.slide');
const prev = document.querySelector('#prev');
const next = document.querySelector('#next');
/// TABS
const tabs = document.querySelector('.navigation');
const tabsItem = document.querySelectorAll('.bar')
let currentSlide = 0;

function goToSlide(nextSlide) {
    img[currentSlide].classList.remove('s1');
    tabsItem[currentSlide].classList.remove('active-tabs');
    img[nextSlide].classList.add('s1');
    tabsItem[nextSlide].classList.add('active-tabs');
    currentSlide = nextSlide;
}
prev.onclick = function() {
    const nextSlide = currentSlide === 0 ? img.length - 1 : currentSlide - 1;
    goToSlide(nextSlide);
};
next.onclick = function() {
    const nextSlide = currentSlide === img.length - 1 ? 0 : currentSlide + 1;
    goToSlide(nextSlide);
};
tabsItem.forEach((listItem, index) => {listItem.addEventListener('click', function(event) {
    goToSlide(index);
})})


 
const loadMore = document.getElementById('loadMore');
loadMore.addEventListener('click', function () {
  const allHide = document.getElementsByClassName('hide');

  for (let i = 0; i < allHide.length; i++) {
    allHide[i].style.display = 'block';
    
  }
})
















