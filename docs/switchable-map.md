---
id: switchable-map
title: Switchable Map Style
---

<iframe src="https://bkoi-gl-example-switchable-style-types.surge.sh/" width="100%" height="280px" frameborder="0" style="border:1px solid black" allowfullscreen></iframe>

##
Add select menu
```
<div id="style-type">
    <select name="styleType" id="style-type-select">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
    </select>
</div>
```
Add select menu <span style="color:#e83e8c">style</span>
```
#style-type {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    position: absolute;
    top: '16px';
    left: '16px';
    z-index: 100;
}
```
Assign the first select option value as the default <span style="color:#e83e8c">style</span> type. Then use <span style="color:#e83e8c">event listener</span> to set the style type of the map.
``` JS
bkoigl.accessToken = '<Barikoi API Key>' // required
const map = new bkoigl.Map({
    container: 'map',
    center: [ 90.3938010872331, 23.821600277500405 ],
    zoom: 12,
    styleType: 'light'  // Pre-defined Map styleType
})

map.on('load', () => {
    // Set Style Type
    document.getElementById('style-type-select').onchange = e => {
        map.setStyleType(e.target.value)
    }
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

        #style-type {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            position: absolute;
            top: '16px';
            left: '16px';
            z-index: 100;
        }
    </style>
    <title>Switchable Style Types</title>
</head>
<body>
    <div id="style-type">
        <select name="styleType" id="style-type-select">
            <option value="light">Light</option>
            <option value="dark">Dark</option>
        </select>
    </div>
    <div id="map"></div>

    <script>
        bkoigl.accessToken = '<Barikoi API Key>' // required
        const map = new bkoigl.Map({
            container: 'map',
            center: [ 90.3938010872331, 23.821600277500405 ],
            zoom: 12,
            styleType: 'light'  // Pre-defined Map styleType
        })

        map.on('load', () => {
            // Set Style Type
            document.getElementById('style-type-select').onchange = e => {
                map.setStyleType(e.target.value)
            }
        })
    </script>
</body>
</html>
```