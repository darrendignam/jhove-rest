/**
* JavaScript wrapper for JHOVE Application details
*/
var jhoveModules = {
  modules : null,
  populate : function (callback, contentType = 'json') {
    $.ajax({
      url         : '/api/jhove/modules',
      dataType    : contentType,
      type        : 'GET',
      success     : function (data, textStatus, jqXHR) {
        console.log(jqXHR);
        jhoveModules.modules = data;
        callback();
      },
      // HTTP Error handler
      error       : function (jqXHR, textStatus, errorThrown) {
        // Log full error to console
        console.log('JHOVE Error: ' + textStatus + errorThrown);
        console.log(jqXHR);
        // Alert the user with details
        alert('Something has gone wrong!!\n\nHTTP ' + jqXHR.status + ': ' + jqXHR.statusText);
      }
    });
  }
};

/**
* Document ready function, loaded up on start
*/
$(document).ready(function() {
	jhoveModules.populate(function() {
      renderModules();
  });
});

/**
* Render the validation result to screen
*/
function renderModules() {
  var transform = {
		  "<>"    : "li",
		  "class" : "list-group-item",
		  "html"  : [
			  {
				"<>"    : "div",
				"class" : "card",
				"html"  : [
					{
						"<>" : "div",
						"class" : "card-body",
						"html" : [
							{
								"<>" : "h5",
								"class" : "card-title",
								"text" : "Module ${name}"
							},
							{
								"<>" : "p",
								"class" : "card-text",
								"text" : "v${release}"
							},
							{
								"<>" : "p",
								"class" : "card-text",
								"text" : function(obj, index) {var date = new Date(obj.date); return "Built " + date.toUTCString();}
							}
						]
					}
				]
			  }
		  ]};
  
  $("ul").json2html(jhoveModules.modules, transform);
}
