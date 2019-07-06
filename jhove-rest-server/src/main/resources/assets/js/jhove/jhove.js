/**
* JavaScript wrapper for JHOVE Application details
*/
var jhoveApp = {
  details : null,
  getDetails : function (callback, contentType = 'json') {
    $.ajax({
      url         : '/api/jhove/',
      dataType    : contentType,
      type        : 'GET',
      success     : function (data, textStatus, jqXHR) {
        console.log(jqXHR);
        jhoveApp.details = data;
        callback();
      },
      // HTTP Error handler
      error       : function (jqXHR, textStatus, errorThrown) {
        // Log full error to console
        console.log('Validation Error: ' + textStatus + errorThrown);
        console.log(jqXHR);
        // Alert the user with details
        alert('Something has gone wrong!!\n\nHTTP ' + jqXHR.status + ': ' + jqXHR.statusText);
      }
    });
  }
};
