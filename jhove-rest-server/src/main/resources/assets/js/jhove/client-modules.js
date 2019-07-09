/**
* JavaScript wrapper for JHOVE Application details
*/
/**
* Document ready function, loaded up on start
*/
$(document).ready(function() {
	jhoveRest.modules.populate(function() {
      renderModules();
  });
});

/**
* Render the validation result to screen
*/
function renderModules() {
  var transforms = {
		"modules" : {
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
								"<>" : "h4",
								"class" : "card-title",
								"text" : "${moduleId.name} v${moduleId.release}"
							},
							{
								"<>" : "p",
								"class" : "card-text",
								"text" : function(obj, index) {var date = new Date(obj.moduleId.date); return "Built " + date.toUTCString();}
							},
							{
								"<>" : "ul",
								"class" : "card-text",
								"html" : function() {return $.json2html(this.formatDetails.mimeTypes, transforms.mimes);}
							}
						]
					}
				]
			  }
		  ]},
			"mimes" 	: {
				"<>"		: "li",
				"text"	: function() {return this + '';}
			}
		};

  $("ul").json2html(jhoveRest.modules.modules, transforms.modules);
}
