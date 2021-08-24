---
id: custom-display
title: Display Custom Map Style
---


<iframe src="https://bkoi-gl-example-custom-map-styles.surge.sh/" width="100%" height="280px" frameborder="0" style="border:1px solid black" allowfullscreen></iframe>

##
 Add a map style url to the <span style="color:#e83e8c">style</span> prop.

``` JS
new bkoigl.Map({
    container: 'map',
    center: [ 90.3938010872331, 23.821600277500405 ],
    zoom: 12,
    style: 'http://map.barikoi.com/styles/barikoi-dark/style.json' // Map Style Url. Need accessToken for mapbox URL.
})
```

## Full Source Code:

``` html
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
    <title>Custom Map</title>
</head>
<body>
    <div id="map"></div>

    <script>
        new bkoigl.Map({
            container: 'map',
            center: [ 90.3938010872331, 23.821600277500405 ],
            zoom: 12,
            style: 'https://map.barikoi.com/styles/barikoi-dark/style.json' // Map Style Url. Need accessToken for mapbox URL.
        })
    </script>
</body>
</html>
```