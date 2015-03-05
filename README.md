# Europeana Rizzo

This is the Europeana fork of Lonely Planet's styleguide Rizzo.

Rizzo is a component API based approach to styleguide-driven development.

The component API is built around the function `ui_component('path', properties)`

Clients wanting to use this function can do so in two ways.


## The Gem Way

One way to use the styleguide is to package Rizzo up as a Gem and reference it from the client application.  This will make the `ui_component` function available to the client.  This way is useful for:

* ruby projects
* style-guide evelopment

This hasn't been tested yet, but java projects could use "the gem way" by compiling the gem to a jar file using a tool like [warbler](https://github.com/jruby/warbler) and then referencing the jar from a tld.  This would make the `ui_component` function available to .jsp files.


## The HTTP Way

For non Ruby projects where no adaptor is available the `europeana` controller allows the component api to be invoked over http.  The following demo function is in pace and can be accessed by a url that looks like this:

    [server]/europeana/molecules/_colours?properties=%7Bbrand_colours:%7Bjade_green:'Celtic-Green'%7D%7D&locale=it

This is similar to Lonely Planet's http connectors available here:

    [server]/global-body-header

with the difference that the Europeana controller accepts the second parameter of the `ui_component` function in the form of a uri-encoded Ruby hash.


The original Lonely Planet README.md follows.


-------------


# Rizzo

Rizzo is the UI layer for lonelyplanet.com. Rizzo also serves LP's header and footer, assets and Style Guide.

The main goal of Rizzo is to enable sharing of templates and assets across all LP applications. This helps us to reduce complexity and increase reusability. There is a write-up of the thought process behind Rizzo on the [engineering blog](http://engineering.lonelyplanet.com/2014/05/18/a-maintainable-styleguide.html).


## Install & Get Dependencies

```bash
$ git clone git@github.com:lonelyplanet/rizzo.git && cd rizzo
$ cp .ruby-version.example .ruby-version
$ cp .ruby-gemset.example .ruby-gemset
$ cd .
$ bundle install
$ npm install
$ grunt setup # sets up jscs & jshint git precommit hook for contributors, and inits the private font submodule
```

### Note for non Lonely Planet staff

Due to licensing restrictions imposed on our fonts you will have to manually create some empty files in order to run Rizzo locally:

```bash
$ touch app/assets/stylesheets/fonts/_font.sass
$ touch app/assets/stylesheets/fonts/_font_woff2.sass
```

## Documentation

Full documentation about Rizzo and development guidelines is available at [http://rizzo.lonelyplanet.com/documentation/general/development-principles](http://rizzo.lonelyplanet.com/documentation/general/development-principles).

## Jasmine Tests
There is a suite of JavaScript tests in `spec/javascripts`. These tests are currently using Jasmine v1.x from `grunt-contrib-jasmine` v0.5.x.

In order to run the tests you'll need a few things installed with node.js.

```shell
npm install -g grunt-cli  # Install grunt globally
npm install # Install packages from package.json
```

You can now run the following to run the tests with grunt...

```shell
grunt ci
``` 

It should look like...
![](http://d.pr/i/jSY4+)
