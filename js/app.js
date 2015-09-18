(function($) {
   
      $.fn.parallax = function(options) {
   
          var windowHeight = $(window).height();
   
          // Establish default settings
          var settings = $.extend({
              speed         : 0.15,
              type          : 'background-position'
          }, options);
   
          // Iterate over each object in collection
          return this.each( function() {
   
            // Save a reference to the element
            var $this = $(this);
   
            // Set up Scroll Handler
            $(document).scroll(function(){
   
                  var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
   
            // Check if above or below viewport
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return;
        }
   
        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);
   
                          // Apply the Y Background Position to Set the Parallax Effect
              if(settings.type === "background-position"){

                $this.css('background-position', 'center ' + yBgPosition + 'px');
              }else{
                $this.css('transform', 'translate3d(0px, 0px, '+yBgPosition+'px)');
              }
                  
            });
          });
      }

      $.fn.vparallax = function(options) {
   
          var windowHeight = $(window).height();
   
          // Establish default settings
          var settings = $.extend({
              speed        : 0.15,
              way          : 'l'
          }, options);
   
          // Iterate over each object in collection
          return this.each( function() {
   
            // Save a reference to the element
            var $this = $(this);
   
            // Set up Scroll Handler
            $(document).scroll(function(){
   
                  var scrollTop = $(window).scrollTop();
                        var offset = $this.offset().top;
                        var height = $this.outerHeight();
   
            // Check if above or below viewport
        if (offset + height <= scrollTop || offset >= scrollTop + windowHeight) {
          return;
        }
   
        var yBgPosition = Math.round((offset - scrollTop) * settings.speed);

        if(settings.way === 'r'){
            yBgPosition  = yBgPosition * (-1); 
        }
   
            $this.css('transform', 'translate3d('+yBgPosition+'px, 0px, 0px)');
                  
            });
          });
      }
  }(jQuery));

$(function() {
 
    //Set up instafeed
    var feed = new Instafeed({
        clientId: '040c7bae0c1644a48dddd7b318dfc786',
        accessToken : '190514654.467ede5.e24ab0c9f0874be4953cdd6087492270',
        target: 'instafeed',
        get: 'user',
        userId: 190514654,
        links: true,
        limit: 8,
        sortBy: 'most-recent',
        resolution: 'standard_resolution',
        template: '<div class="col-xs-12 col-sm-6 col-md-4 col-lg-3"><div class="photo-box"><div class="image-wrap"><a href="{{link}}" target="_blank"><img src="{{image}}"></a><div class="likes">{{likes}} Likes</div></div><div class="description">{{caption}}<div class="date">{{model.date}}</div></div></div></div>'
    });

    feed.run();


    $('header').parallax({
        speed : .100
    });

    $('.parallax-container').parallax({
        speed : .100
    }); 
    
    $('.vparallax-r').vparallax({
        speed : .100,
        way   : 'r'
    });

    $('.vparallax-l').vparallax({
        speed : .100,
        way   : 'l'
    });

    // When the window has finished loading create our google map below
    google.maps.event.addDomListener(window, 'load', init);

    function init() {
        // Basic options for a simple Google Map
        // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
        var mapOptions = {
            // How zoomed in you want the map to start at (always required)
            zoom: 11,

            // The latitude and longitude to center the map (always required)
            center: new google.maps.LatLng(43.554927, 1.482867), // New York

            // How you would like to style the map. 
            // This is where you would paste any style found on Snazzy Maps.
            styles: [{"featureType":"all","elementType":"all","stylers":[{"hue":"#ffaa00"},{"saturation":"-33"},{"lightness":"10"}]},{"featureType":"road.highway","elementType":"geometry","stylers":[{"visibility":"simplified"}]},{"featureType":"road.highway","elementType":"labels.text","stylers":[{"visibility":"on"}]}],

            scrollwheel : false,

            mapTypeControl : false,

            streetViewControl : false,

            panControl : false,

            scaleControl : false,

            zoomControl : false,

            overviewMapControl : false,

            draggable : false
        };

        // Get the HTML DOM element that will contain your map 
        // We are using a div with id="map" seen below in the <body>
        var mapElement = document.getElementById('map');

        // Create the Google Map using our element and options defined above
        var map = new google.maps.Map(mapElement, mapOptions);

    }
 
});