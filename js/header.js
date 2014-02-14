var headerData = {};

var compiledHeader = Handlebars.getTemplate('header');
var header = compiledHeader(headerData);

$("#header").html(header);