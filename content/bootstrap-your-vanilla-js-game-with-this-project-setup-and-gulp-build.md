Title: Bootstrap your vanilla JS game with this project setup and gulp build
Date: 2016-08-14 06:00
Slug: bootstrap-your-vanilla-js-game-with-this-project-setup-and-gulp-build
Summary:Building your own vanilla HTML5 game without dependencies might sound like a tough and odd job to do. In fact, it's a really fun experience and a huge opportunity to sharpen your JS and general programming skills. One awesome competition that empowers this movement is the JS13K competition. It ...
Tags: gulp, canvas, project, build, js13k, structure, html5

Building your own vanilla HTML5 game without dependencies might sound like a tough and odd job to do. In fact, it's a really fun experience and a huge opportunity to sharpen your JS and general programming skills.

One awesome competition that empowers this movement is the JS13K competition. It's a 1 month competition where you build an HTML5 game with a 13kb file size limit. While this post is dedicated to this competition, the content applies to building small JS games in general.

As a warm up for the competition, I've decided to prepare a project setup and gulp build, which can be found here with all the setup instructions.

This post will be explaining the project setup, where each piece falls and describe the gulp build process, in the bootstrap project linked above. Assuming you already have some experience with HTML5 games and basic concepts like the game loop.

```
Project structure
.
+-- README.md
+-- _build
?   +-- game.min..css
?   +-- game.min.js
?   \-- index.html
+-- _dist
?   \-- game.zip
+-- gulpfile.js
+-- package.json
\-- src
    +-- css
    ?   \-- style.css
    +-- images
    +-- index.html
    \-- js
        +-- draw.js
        +-- game.js
        +-- random_obj.js
        \-- util.js
``` 

At the root
Here, we have our gulp build file, our npm dependencies in package.json and two directories _build and _dist. The job of the gulp build process is to output the final concatenated, minified js, css and html code into _build, and then zip all of the contents and store them under the _dist directory.

This process runs automatically every time the work is saved, which helps keep an eye on the final output especially on the size of the zip file that is being updated in the _dist directory, before finally submitting.

The source code
Everything related to the source of the project would go under src which would contain our css, images, and js code each in its respective directory.

Entry point
Also notice that index.html is at the root of the src folder, which is the entry point to our game, in it we'd initialise the canvas and include all dependencies. This would be the non-compiled version which would run on the local dev server and looks something like this:

```html
<!DOCTYPE HTML>
<html lang="en">
    <head>
        <title>JS13K Starter</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1, maximum-scale=1, user-scalable=0" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <!-- build:css -->
        <link rel="stylesheet" type="text/css" href="./css/style.css" />
        <!-- endbuild -->
    </head>
    <body>
        <h1>JS13K Starter Project</h1>
        <h3>Click to randomize!</h3>
        <canvas></canvas>

        <!-- build:js -->
        <script src="./js/game.js"></script>
        <script src="./js/draw.js"></script>
        <script src="./js/util.js"></script>
        <script src="./js/random_obj.js"></script>
        <!-- endbuild -->
    </body>
</html>
``` 

JS Code
As for the JS, one easy way to structure is it follow a couple of simple principles:

Wrap your game code around a namespace
Separate code into different files based on their functionality
A simple way to namespace your game is to have a global object for the game, I named it $ in this case as its short and jQuery is not being used in the project. Under that name space I'd attach different objects and functions, used across different files.

For example, we can have reusable functions around drawing on canvas available under the $.Draw module inside the draw.js file which contains stuff like $.Draw.rect, $.Draw.circle or anything related to drawing on the screen.

As for the logic of different characters or entities related to the game such as a meteor, hero, or a villain, those would have their own files and manage their own logic relative to the game and its loop. Those modules would have a class like structure with a constructor. That's because we want to be creating several instances of our game objects into the game such as several meteors, one ups, etc...

The code for such a module would look something like this:

```javascript
"use strict";

$.RandomObj = function () {
    this.x = $.util.randomInRange(0, $.width);
    this.y = $.util.randomInRange(0, $.height);
    this.dimension = 0;
    this.targetDimension = $.util.randomInRange(50, 70);
    this.growthSpeed = $.util.randomInRange(0.5, 2);
    this.color = $.util.pickRandomFromObject($.colors);
};

$.RandomObj.prototype.render = function () {
    $.Draw.rect(this.x, this.y, this.dimension, this.dimension, this.color);
};

$.RandomObj.prototype.update = function () {
    if (this.dimension < this.targetDimension) {
        this.dimension += this.growthSpeed;
    }
};
``` 

Creating an instance of our RandomObj would be something like randomObjectInstance = new $.RandomObj() ideally instantiated from within our game loop. Each game object class would implement two essential functions, render and update.

Each of those functions would be called automatically by our game loop on each iteration.

Calling randomObjectInstance.render() would trigger the painting code for that specific instance of that specific game object.

Calling randomObjectInstance.update() would trigger the change to be done on that instance's state such as growing in size + 1 when that game loop tick takes place.

The game loop itself would be as simple as an infinite loop that triggers a render and update calls on each iteration on all the game objects available in the world. Example:

```javascript
$.loop = function () {
    $.render();
    $.update();

    window.requestAnimFrame($.loop);
};

$.update = function () {
    for (var i = 0; i < $.entities.length; i++) {
        $.entities[i].update();    
    }
};

$.render = function () {
    $.Draw.clear();

    for (var i = 0; i < $.entities.length; i++) {
        $.entities[i].render();    
    }
};
``` 

The game loop is available in the game.js file in the project.

Gulp build
The build script is pretty straightforward, as mentioned earlier, its all about concatenating, minifying the source then outputting a final zip file. They're all divided to separate tasks serve, buildCSS, buildJS, buildIndex, and zipBuild. And finally, they're all grouped into one main building command which runs them in order.

This runs every time changes are saved on the project thanks to the watch command. In addition, the game's entry point index.html via a serve command.

To get everything up and running in one shot, just run gulp this will run an initial build, serve the app on the localhost and will run the watch command which will check for any changes and trigger a new build and zip.

After each save, the gulp build will output the current size of the zipped project in order to stay alert on the size of the project. Something like [09:32:55] Size of game.zip: 2.75 KB

You can find the starter project example on this link.

I hope you find this JS13K starter useful and I'm looking forward to participating and seeing all the awesome submissions this year. Would love to hear your feedback and suggestions on this post.
