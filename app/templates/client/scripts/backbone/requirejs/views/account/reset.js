define(function(require) {
    'use strict';

    var app = require('../../app');

    var Reset = Backbone.View.extend({

        el: '.content',

        template: JST['client/templates/account/reset<% if (jsTemplate === 'handlebars') { %>.hbs<% } else if (jsTemplate === 'underscore') { %>.jst<% } else if (jsTemplate === 'jade') { %><% } %>'],

        events: {
            'submit form': 'formSubmit'
        },

        initialize: function() {
            this.render();
        },

        formSubmit: function(e) {
            e.preventDefault();
            var $form = $(e.currentTarget);
            app.user.reset($form);
        },

        render: function() {
            this.$el.html(this.template);
            return this;
        }

    });

    return Reset;

});
