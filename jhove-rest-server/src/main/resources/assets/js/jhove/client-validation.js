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
$(document).ready( function() {
  /**
  * Event handler for the file selector
  */
  $('input:file').on('change', function() {
    // Disable the submit button
    $('button').prop('disabled', true);
    // Grab the label component
    var fileLabel = $(this).siblings('.custom-file-label');
    // Get filename without the fake path prefix
    var fileName = $(this).val().split('\\').pop();
    // Set the filename selection, a little tricksy
    fileLabel.addClass("selected").html(fileName);
    // Calculate and display the SHA1 of the file
    calcFileSha1(this.files[0]);
  });

  /**
  * Event handler for submit button
  */
  $('button').click(function () {
    // Grab the data from the form object
    var formData = new FormData($('form')[0])
    // Call the validator, with result renderer as callback
    jhoveValidator.validate(formData, function() {
      renderResult();
    });
  });

  jhoveModules.populate(function() {
	renderModules();
  });
});

/**
* Calculates the SHA-1 of selected file and displays the result
*/
function calcFileSha1(file) {
  // New checksum calculator instance
  rusha = new Rusha();
  // File reader to get data
  reader = new FileReader();
  // Register reader onload event
  reader.onload = function(e) {
    // Calculate the checksum from the reader result
    var digest = rusha.digest(reader.result);
    // Set the label when finished
    $("#digest").val(digest);
    // Enable the submit button
    $('button').prop('disabled', false);
  }
  // Signal checkcum calculation and load reader
  $("#digest").val("Calcluating package checksum...");
  reader.readAsBinaryString(file);
}


function renderModules() {
  var transform = {
		  "<>"    : "option",
		  "value" : "${name}",
		  "text"  : "${name}"
		  };
  $("select").json2html(jhoveModules.modules, transform);
}
/**
* Render the validation result to screen
*/
function renderResult() {
  $("#results").empty();
  $("#results").append($("<h2>").text("Validation Result"));
  var transforms = {
    "status" : {
      "<>"    : "div",
      "html"  : [
          {
            "<>"    : "div",
            "class" : function(obj, index) {return "alert " + ((obj.valid > 0) ? "alert-success" : "alert-danger");},
            "text"  : "Validity: ${validMessage}"
           },
          {
            "<>"    : "div",
            "class" : function(obj, index) {return "alert " + ((obj.wellFormed > 0) ? "alert-success" : "alert-danger");},
            "text"  : "Well Formedness: ${wellFormedMessage}"
          }
      ]
    },
    "messages" : {
      "<>"    : "div",
//      "class" : function(obj, index) {return "alert " + (obj.level == "ERROR" ? "alert-danger" : "alert-warning");},
      "text"  : function(obj, index) {return (index + 1) + ": " + obj.message;}
    }
  };
  $("#results").json2html(jhoveValidator.result, transforms.status);
  $("#results").append($("<h3>").text("Messages"));
  $("#results").json2html(jhoveValidator.result.messages, transforms.messages);
}

