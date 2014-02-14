var newsletterFormData = {};

var compiledNewsletterForm = Handlebars.getTemplate('newsletterForm');
var newsletterForm = compiledNewsletterForm(newsletterFormData);

$("#newsletterForm").html(newsletterForm);