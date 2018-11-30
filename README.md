# What is this?

Screeps code.

Used [this](https://docs.screeps.com/contributed/advanced_grunt.html) guide to set up grunt.

# How do I set this up?

1. Populate `/.screeps.json` with your username and password used to log in to screeps.
   
   See `/.screeps.example.json` for an example of the file structure.

2. Run `npm install` to install the packages located in `package.json` into `node_modules`
3. Run `grunt default`, aka `grunt`, to:
  - prettify code,
  - copy all files from `src`, flattening directories,
  - and upload the `dist` folder to screeps.
