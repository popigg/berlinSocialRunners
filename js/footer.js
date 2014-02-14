var footerData = {};

var compiledFooter = Handlebars.getTemplate('footer');
var footer = compiledFooter(footerData);

$("#footer").html(footer);