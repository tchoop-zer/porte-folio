//"use strict";
//V2

$(document).ready(function() {
  // Bind click on nav button


  // =========== Bind click on each nav link
  $(".menuy").on("click", function(event) {
    // Prevent browser default behavior
    event.preventDefault();
    // Remove all current active
    $(".navx").removeClass("active");

    // Set the new active item


    // Get href value (target id <> anchor)
    var target = $(this).attr("href");
    //console.log("terget="+target); 

    // Get the top position of the target container
    var scrollValue = $(target).offset().top;

    // Scroll to this position
    $("html, body, div").animate({ scrollTop: scrollValue }, 100, function(){
      $(this)
      .parent()
      .addClass("active");
    });
  });


var element_positionUn = $('#un').offset().top;
var element_positionDeux = $('#deux').offset().top;
var element_positionTrois = $('#trois').offset().top;
var element_positionQuatre = $('#quatre').offset().top;
var element_positionCinq = $('#cinq').offset().top;
var element_positionSix = $('#six').offset().top;
var screen_height = $(window).height();
var activation_offset = 0.5;//determines how far up the the page the element needs to be before triggering the function
var activation_pointUn = element_positionUn - (screen_height * activation_offset);
var activation_pointDeux = element_positionDeux - (screen_height * activation_offset);
var activation_pointTrois = element_positionTrois - (screen_height * activation_offset);
var activation_pointQuatre = element_positionQuatre - (screen_height * activation_offset);
var activation_pointCinq = element_positionCinq - (screen_height * activation_offset);
var activation_pointSix = element_positionSix - (screen_height * activation_offset);



//A chaque scrool  : 
$(window).on('scroll', function() {

    var y_scroll_pos = window.pageYOffset;
    //console.log("y_scroll_pos="+y_scroll_pos);
  
    //Animation des Jauges : Dans tt les cas on retire l'animation
    $('.contain').each(function(index){
      var containItem = $(this);
      this.style.animation = "";
    });


    if( y_scroll_pos > activation_pointSix ){ 
        console.log("==========>Menu six");
        menuActive("menuXSix");
    } else if( y_scroll_pos > activation_pointCinq ){ 
        console.log("==========>Menu cinq");
         menuActive("menuXCinq");
    } else if(y_scroll_pos > activation_pointQuatre) { 
        console.log("==========>Menu quatre");
         menuActive("menuXQuatre");
    } else if( y_scroll_pos > activation_pointTrois ){ 
        console.log("==========>Menu trois");
         menuActive("menuXTrois");
    } else if(y_scroll_pos > activation_pointDeux) { 
        console.log("==========>Menu deux");
         menuActive("menuXDeux");
    } else  if(y_scroll_pos > activation_pointUn) { 
        console.log("==========>Menu un");
         menuActive("menuXUn");
    }



});


  
  });


function menuActive(MenuNamme) {
  if (MenuNamme!=menuActif) {
    menuActif = MenuNamme;
    //console.log('menuActive='+MenuNamme);
    var target = document.getElementById("menuXUn");
    target.childNodes[0].classList.remove("dotactive");
    target.childNodes[0].classList.add("dot");
    var target = document.getElementById("menuXDeux");
    target.childNodes[0].classList.remove("dotactive");
    target.childNodes[0].classList.add("dot");  
    var target = document.getElementById("menuXTrois");
    target.childNodes[0].classList.remove("dotactive");
    target.childNodes[0].classList.add("dot");
    var target = document.getElementById("menuXQuatre");
    target.childNodes[0].classList.remove("dotactive");
    target.childNodes[0].classList.add("dot");  
    var target = document.getElementById("menuXCinq");
    target.childNodes[0].classList.remove("dotactive");
    target.childNodes[0].classList.add("dot");  
    var target = document.getElementById("menuXSix");
    target.childNodes[0].classList.remove("dotactive");
    target.childNodes[0].classList.add("dot");

    var target = document.getElementById(MenuNamme);  
    target.childNodes[0].classList.remove("dot");
    target.childNodes[0].classList.add("dotactive");
  }
  
}