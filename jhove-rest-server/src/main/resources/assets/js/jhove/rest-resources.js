/**
 * JavaScript wrapper JHOVE REST resources
 */
var jhoveRest = {
  validator : {
    result : null,
    status : null,
    validate : function (formData, callback, contentType = 'json') {
      $.ajax({
        url         : '/api/jhove/validate',
        type        : 'POST',
        data        : formData,
        dataType    : contentType,
        contentType : false,
        processData : false,
        success     : function (data, textStatus, jqXHR) {
          console.log(jqXHR);
          jhoveRest.validator.result = data;
          callback();
        },
        // HTTP Error handler
        error       : function (jqXHR, textStatus, errorThrown) {
          // Log full error to console
          console.log('Validation Error: ' + textStatus + errorThrown);
          console.log(jqXHR);
          // Alert the user with details
          alert('Something has gone wrong!!\n\nHTTP ' + jqXHR.status + ': ' + jqXHR.responseText);
        }
      });
    }
  },
  app : {
    details : null,
    getDetails : function (callback, contentType = 'json') {
      $.ajax({
        url         : '/api/jhove/',
        dataType    : contentType,
        type        : 'GET',
        success     : function (data, textStatus, jqXHR) {
          console.log(jqXHR);
          jhoveRest.app.details = data;
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
  },
  modules : {
    modules : null,
    populate : function (callback, contentType = 'json') {
      $.ajax({
        url         : '/api/jhove/modules',
        dataType    : contentType,
        type        : 'GET',
        success     : function (data, textStatus, jqXHR) {
          console.log(jqXHR);
          jhoveRest.modules.modules = data;
          callback();
        },
        // HTTP Error handler
        error       : 'jhoveRest.errHandler'
      });
    }
  },
  errHandler : function (jqXHR, textStatus, errorThrown) {
    // Log full error to console
    console.log('JHOVE Error: ' + textStatus + errorThrown);
    console.log(jqXHR);
    // Alert the user with details
    alert('Something has gone wrong!!\n\nHTTP ' + jqXHR.status + ': ' + jqXHR.statusText);
  }
};
