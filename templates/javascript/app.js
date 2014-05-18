'use strict';

angular
  .module('<%= scriptAppName %>', [<%= angularModules %>])
    .config(function ($sailsProvider <% if (ngRoute) { %>, $routeProvider <% } %>) {
        if (window.location.port === '9000') {
            $sailsProvider.url = window.location.origin.replace('9000', '1337');
        }

        <% if (ngRoute) { %>
        $routeProvider
        .when('/', {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
            })
        .otherwise({
            redirectTo: '/'
        });
        <% } %>

    }).run(function($sails) {

        $sails.on('message', function (message) {
            console.info('message', message);
        });

    $sails.get('/message/subscribe').success(function(data) {
            console.log('success', data);
        }).error(function(data){
            console.log('error', data);
        });

    });
