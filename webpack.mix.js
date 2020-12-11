let mix = require("laravel-mix");

mix
  .js("dist/app.js", "assets/")
  .sass("styles/app.scss", "assets/")
  .setPublicPath("assets")
  .disableNotifications();
