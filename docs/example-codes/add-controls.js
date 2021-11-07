const htmlSource = `<!DOCTYPE html>
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
    <title>Add Controls</title>
</head>
<body>
    <div id="map"></div>

    <script>
        bkoigl.accessToken = '<Barikoi API Key>' // required
        const map = new bkoigl.Map({
            container: 'map',
            center: [ 90.3938010872331, 23.821600277500405 ],
            zoom: 12
        })

        map.on('load', () => {
            // Add Fullscreen Control
            map.addControl(
                new bkoigl.FullscreenControl()
            )

            // Add Zoom Navigation Control
            map.addControl(
                new bkoigl.NavigationControl()
            )

            // Add Map Scale Control
            map.addControl(
                new bkoigl.ScaleControl()
            )
        })
    </script>
</body>
</html>`

export default htmlSource;