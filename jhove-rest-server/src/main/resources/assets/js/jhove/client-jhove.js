/**
* Document ready function, loaded up on start
*/
$(document).ready(function() {
    jhoveRest.app.getDetails(function() {
      renderResult();
  });
});

/**
* Render the validation result to screen
*/
function renderResult() {
  $("#results").empty();
  var transforms = {
    "details" : {
      "<>"    : "div",
      "html"  : [
          {
            "<>"    : "h2",
            "text"  : "JHOVE v${version}"
          },
          {
            "<>"    : "h3",
            "text"  : function(obj, index) {var date = new Date(obj.buildDate); return "Built " + date.toUTCString();}
          },
          {
            "<>"    : "h3",
	        "text"  : "Rights"},
	      {
            "<>"    : "p",
            "text"  : "${rights}"
          }
      ]
    }
  };
  $("#results").json2html(jhoveRest.app.details, transforms.details);
}
