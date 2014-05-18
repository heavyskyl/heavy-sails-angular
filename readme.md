Yeoman generator for AngularJS with SailsJS server - lets you quickly set up a project with sensible defaults and best practises.

This is a sailsjs adapter of yeoman -angular-generator

Twitter - https://twitter.com/V_Tkachenko_UA
Please subscribe to a updates.

## Usage

Install `generator-heavy-sails-angular`:
```
npm install -g generator-heavy-sails-angular
```

Make a new directory, and `cd` into it:
```
mkdir my-new-project && cd $_
```

Run `yo heavy-sails-angular`, optionally passing an app name:
```
yo heavy-sails-angular [app-name]
```

input sailsjs assets folder ( e.g. : ../../assets/my-application );
Now you can use build-dev and build grunt tasks that should upload your angular application to a sails server
( assets folder )

in SailsJS layout include index.html of your application
e.g.:
//layout.ejs
<% include ../assets/my-application/index.html %>

//some-other-layout.ejs
<% include ../assets/some-other-app/index.html %>

So, heavy-sails-angular generator supports multi-yeoman clients applications for SailsJS server.

You can develop your app as a normal angular-generator application, but then deploy it to a sails server.
( see example - https://github.com/heavyskyl/SailsJSProject/tree/angular-switch/testProject ).

How it works ?
- grunt change path of files after deploying application to a assets folder.

Run `grunt`, `build`, `build-dev` for building and `grunt serve` for preview


## Generators

Available generators:

* [heavy-sails-angular](#app) (aka [angular:app](#app))
* [heavy-sails-angular:controller](#controller)
* [heavy-sails-angular:directive](#directive)
* [heavy-sails-angular:filter](#filter)
* [heavy-sails-angular:route](#route)
* [heavy-sails-angular:service](#service)
* [heavy-sails-angular:provider](#service)
* [heavy-sails-angular:factory](#service)
* [heavy-sails-angular:value](#service)
* [heavy-sails-angular:constant](#service)
* [heavy-sails-angular:decorator] (#decorator)
* [heavy-sails-angular:view](#view)

## License

[BSD license](http://opensource.org/licenses/bsd-license.php)
