// initialize and configuration for wow js - animations
wow = new WOW({
    animateClass: 'animated',
    offset: 150,
    mobile: false,
    callback: function(box) {
        //console.log("WOW: animating <" + box.tagName.toLowerCase() + ">")
    }
});
wow.init();

// initialize tooltips and popovers
$(function () {
$('[data-toggle="tooltip"]').tooltip();
$('[data-toggle=popover]').popover();
})

//initialize swipers
//home slider
var swiper = new Swiper('.home-slider', {
    pagination: '.home-pagination',
    paginationClickable: true,
    nextButton: '.home-slider-next',
    prevButton: '.home-slider-prev'
});

// smoth scroll
// nav
$(".navbar-nav li a[href^='#']").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

//navbar-brand
$(".navbar-brand").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   console.log(this.hash);

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// about
$("#about-counter > div > div > div > div > a").on('click', function(e) {
   // prevent default anchor click behavior
   e.preventDefault();

   // store hash
   var hash = this.hash;

   // animate
   $('html, body').animate({
       scrollTop: $(this.hash).offset().top
     }, 300, function(){

       // when done, add hash to url
       // (default click behaviour)
       window.location.hash = hash;
     });

});

// Google maps configuration
// set your latitude, longitude and address of any point on Google Maps - http://www.gps-coordinates.net/
// Google maps reference - https://developers.google.com/maps/
// You need API key - https://developers.google.com/maps/documentation/javascript/get-api-key
// place your api key in link to script  <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY"></script>
var map;
var mapAddress = new google.maps.LatLng(42.483398,-71.066774);

function initialize() {

    var mapOptions = {
        zoom: 18,
        scrollwheel: false,
        center: mapAddress,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'usroadatlas']
        }
    };

    map = new google.maps.Map(document.getElementById('map-canvas'),
        mapOptions);


    var marker = new google.maps.Marker({
        position: mapAddress,
        map: map,
    });

}

google.maps.event.addDomListener(window, 'load', initialize);
