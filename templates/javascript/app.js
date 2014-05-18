'use strict';

angular
  .module('<%= scriptAppName %>', [<%= angularModules %>])<% if (ngRoute) { %>
    .config(function ($sailsProvider, $routeProvider) {
        if (window.location.port === '9000') {
            $sailsProvider.url = window.location.origin.replace('9000', '1337');
        }

    $routeProvider
    .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
        })
    .otherwise({
        redirectTo: '/'
        });
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
