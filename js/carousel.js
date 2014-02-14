var carouselData = {};

var compiledCarousel = Handlebars.getTemplate('carousel');
var carousel = compiledCarousel(carouselData);

$("#carousel").html(carousel);