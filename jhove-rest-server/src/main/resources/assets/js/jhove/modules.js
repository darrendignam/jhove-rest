/**
* JavaScript wrapper for JHOVE Application details
*/
/**
* Document ready function, loaded up on start
*/
$(document).ready(function () {
  jhoveRest.modules.populate(function () {
    renderModules()
  })
})

/**
* Render the validation result to screen
*/
function renderModules () {
  var transform = {
    '<>': 'li',
    class: 'list-group-item',
    html: [
      {
        '<>': 'div',
        class: 'card',
        html: [
          {
            '<>': 'div',
            class: 'card-body',
            html: [
              {
                '<>': 'h5',
                class: 'card-title',
                text: 'Module ${name}'
              },
              {
                '<>': 'p',
                class: 'card-text',
                text: 'v${release}'
              },
              {
                '<>': 'p',
                class: 'card-text',
                text: function (obj, index) { var date = new Date(obj.date); return 'Built ' + date.toUTCString() }
              }
            ]
          }
        ]
      }
    ]
  }

  $('ul').json2html(jhoveRest.modules.modules, transform)
}
