// window.onscroll = function() {
//     pageScroll();
// };

// function pageScroll() {
//     var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
//     var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
//     var scrolled = (winScroll / height) * 100;
//     document.getElementById("fill").style.width = scrolled + "%";
// }










let cProbar = document.querySelectorAll(".circle-pro"),
    pValue = document.querySelectorAll(".value");

let speed = 100;

cProbar.forEach((val, ind) => {
    let ProgressEndValue = document.querySelectorAll(".value")[ind].innerHTML;
    let progressStartValue = 0;
    let progress = setInterval(() => {
        progressStartValue++;
        pValue[ind].textContent = `${progressStartValue}%`
        val.style.background = `conic-gradient(#08D761 ${progressStartValue * 3.6}deg,#E3FBEEEB 0deg)`
        if (progressStartValue == ProgressEndValue) {
            clearInterval(progress);

        }

    }, speed);

});

// carousal

$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:false,
    responsive:{
        0:{
            items:1,
            nav:true
        },
        600:{
            items:3,
            nav:false
        },
        1000:{
            items:4,
            nav:false,
            dots:true,
            loop:false
        }
    }
});








// Get the button
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
};

