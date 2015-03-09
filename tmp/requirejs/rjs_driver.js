var requirejs = require("/home/andy/.rvm/gems/ruby-2.2.0/bundler/gems/requirejs-rails-dd10bdbbbb52/bin/r.js")
var baseConfig = {
  "baseUrl": "/home/andy/git/ui-api/tmp/requirejs/src",
  "dir": "/home/andy/git/ui-api/tmp/requirejs/dst"
};

baseConfig.modules = [
  {
  "name": "application"
},
];

requirejs.optimize(baseConfig);
