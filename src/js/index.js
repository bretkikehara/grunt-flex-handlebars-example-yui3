YUI({
    modules: {
        // Define the location of the precompiled template.
        'example-templates': {
            fullpath: 'hbs/handlebars-template.js'
        }
    }
}).use('node', 'example-templates', function (Y) {
    
    // template data
    var jsonData = {
        'page-name': 'index'
    };


    Y.on('click', function(e) {
        
        Y.one('#view-page-plain').setHTML(
            Y.namespace('template')['view-page-plain'](jsonData)    
        );

        Y.one('#view-page-bold').setHTML(
            Y.namespace('template')['view-page-bold'](jsonData)    
        );

        Y.one('#view-partial').setHTML(
            Y.namespace('template')['view-partial'](jsonData)    
        );        

    }, '#start-button');
});