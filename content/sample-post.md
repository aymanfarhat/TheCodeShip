Title: Lorem ipsum dolor sit amet, consectetur adipiscing elit
Date: 2016-04-02 17:26
Slug: lorem-ipsum-sample-post
Summary: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mauris non nulla pellentesque consequat. Pellentesque tellus enim, malesuada eu mattis non, vulputate ac ligula. Morbi ut nisi quis ex porttitor laoreet ullamcorper non dolor...
Status:draft

Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam pellentesque mauris non nulla pellentesque consequat. Pellentesque tellus enim, malesuada eu mattis non, vulputate ac ligula. Morbi ut nisi quis ex porttitor laoreet ullamcorper non dolor. Mauris eget felis a nunc imperdiet pellentesque. Duis sagittis sit amet dui at feugiat. Phasellus sed suscipit lorem, vel imperdiet tortor. Nam lobortis est at rhoncus pretium. Mauris id ligula urna. Sed quis maximus diam, et egestas orci. Sed non venenatis magna.

## Testing HTML code (h2)

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

### Testing JS code (H3) subsection

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

[This is a sample hyperlink]("http://google.com"). Quisque hendrerit, sem aliquet suscipit aliquet, sem urna tristique nisi, ut mattis risus diam et lacus. Donec dapibus auctor nulla, tempor pharetra sapien. Sed ornare libero et placerat consectetur. Etiam tristique sapien a odio viverra consectetur. Maecenas a eros massa. Nullam pharetra nulla sed odio dictum cursus. In vestibulum mauris magna, eu semper nisl vestibulum vel. In euismod nisi at arcu sollicitudin maximus. Cras eu commodo sapien, sit amet ultricies dui. Morbi hendrerit justo mauris, vitae scelerisque massa accumsan eget. Quisque porta nunc vel sem pretium accumsan.

## Testing Python

```python

def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)

def p_decorate(func):
   def func_wrapper(name):
       return "<p>{0}</p>".format(func(name))
   return func_wrapper

my_get_text = p_decorate(get_text)

print my_get_text("John")

# <p>Outputs lorem ipsum, John dolor sit amet</p>
```

## bullet points
- Aliquam eu massa magna. 
- Quisque hendrerit, sem aliquet suscipit aliquet, sem urna tristique nisi
- ut mattis risus diam et lacus. Donec dapibus auctor nulla 
- tempor pharetra sapien. Sed ornare libero et placerat consectetur.

## Testing Python

```python

def get_text(name):
   return "lorem ipsum, {0} dolor sit amet".format(name)

def p_decorate(func):
   def func_wrapper(name):
       return "<p>{0}</p>".format(func(name))
   return func_wrapper

my_get_text = p_decorate(get_text)

print my_get_text("John")

# <p>Outputs lorem ipsum, John dolor sit amet</p>
```

## Testing inline code
Vestibulum in semper risus. `sudo apt-get install foo --bar`. Morbi purus velit, bibendum id sollicitudin vitae, pulvinar rutrum quam. Duis volutpat imperdiet nunc sit amet ultrices. Donec eu luctus enim. Donec ante mi, lobortis nec ornare id, eleifend a augue. Ut volutpat nisl vel velit sollicitudin varius. Nam eget consequat dolor. Nullam egestas tellus ut tempus accumsan. Vivamus iaculis elit ac tortor varius, id mattis dolor consectetur. In facilisis justo ac diam consequat, sit amet ullamcorper dui tincidunt. Vivamus quam eros, posuere a risus quis, consequat consequat libero.

## Ordered list

1. one
2. two
3. three
4. four
