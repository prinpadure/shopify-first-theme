let mix = require("laravel-mix");

mix
  .ts("src/ts/app.ts", "assets/")
  .sass("src/styles/app.scss", "assets/")
  .setPublicPath("assets")
  .disableNotifications();
