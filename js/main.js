requirejs.config({
	baseUrl: 'js/vendor',
    paths: {
    	//first_template: '../first_template'
    }
});
requirejs(['jquery'/*, 'first_template'*/],
function   (test) {
	console.log(test("#entry-template").html());
});