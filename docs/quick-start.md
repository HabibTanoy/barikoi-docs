---
id: quick-start
title: Quickstart
---

##

<iframe src="https://bkoi-gl-example-display-map.surge.sh/" width="100%" height="280px" frameborder="0" style="border:1px solid black" allowfullscreen></iframe>

Get your own API key if you want to use <span style="color:#e83e8c">Bkoi GL JS</span> data in your project.

Include the JavaScript and CSS files in the <span style="color:#e83e8c">head tag</span> of your HTML file.

``` html
// For CSS
<link rel="stylesheet" href="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.css">
// For JS
<script src="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.js"></script>
```
The tag must have non-zero height.
```css 
#map {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
}
```
Include the following code in the <span style="color:#e83e8c">body tag</span> of your HTML file.
```html
<div id="map"></div>
    <script>
        bkoigl.accessToken = '<Barikoi API Key>' // required
        new bkoigl.Map({
            container: 'map',
            center: [ 90.3938010872331, 23.821600277500405 ],
            zoom: 12
        })
    </script>
```
## Full Source Code:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.css">
    <script src="https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.js"></script>
    <style>
        body, #map {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            width: 100vw;
            height: 100vh;
            overflow: hidden;
        }
    </style>
    <title>Display Map</title>
</head>
<body>
    <div id="map"></div>

    <script>
        bkoigl.accessToken = '<Barikoi API Key>' // required
        new bkoigl.Map({
            container: 'map',
            center: [ 90.3938010872331, 23.821600277500405 ],
            zoom: 12
        })
    </script>
</body>
</html>
```