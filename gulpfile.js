var elixir = require('laravel-elixir');
elixir.config.js.browserify.watchify.options.poll = true;

// elixir.config.js.browserify.transformers.push({
//     name: 'vueify'
// });
require('laravel-elixir-vueify');

/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir(function(mix) {
    mix.sass('app.scss');

    mix.sass('admin.scss');

    mix.browserify('admin.js')
    mix.browserify('home.js')
    mix.version(['public/js/admin.js', 'public/js/home.js']);
});
