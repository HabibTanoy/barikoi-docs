---
id: heatmap-layer
title: Heatmap Layer
---

<iframe src="https://bkoi-gl-example-heatmap-layer.surge.sh/" width="100%" height="280px" frameborder="0" style="border:1px solid black" allowfullscreen></iframe>

##
- Add a geojson point source. <span style="color:#e83e8c">Heatmap Layers</span> also work with a vector tile source
``` js
map.addSource('earthquakes', {
    type: 'geojson',
    data: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
})
```

- Add <span style="color:#e83e8c">Heatmap Layer</span>
``` js
map.addLayer({
    'id': 'earthquakes-heat',
    'type': 'heatmap',
    'source': 'earthquakes',
    'maxzoom': 9,
    'paint': {
        'heatmap-weight': [
            'interpolate',
            [
                'linear'
            ],
            [
                'get',
                'mag'
            ],
            0,
            0,
            6,
            1
        ],
        'heatmap-intensity': [
            'interpolate',
            [
                'linear'
            ],
            [
                'zoom'
            ],
            0,
            1,
            9,
            3
        ],
        'heatmap-color': [
            'interpolate',
            [
                'linear'
            ],
            [
                'heatmap-density'
            ],
            0,
            'rgba(33,102,172,0)',
            0.2,
            'rgb(103,169,207)',
            0.4,
            'rgb(209,229,240)',
            0.6,
            'rgb(253,219,199)',
            0.8,
            'rgb(239,138,98)',
            1,
            'rgb(178,24,43)'
        ],
        'heatmap-radius': [
            'interpolate',
            [
                'linear'
            ],
            [
                'zoom'
            ],
            0,
            2,
            9,
            20
        ],
        'heatmap-opacity': [
            'interpolate',
            [
                'linear'
            ],
            [
                'zoom'
            ],
            7,
            1,
            9,
            0
        ]
    }
})
```

- Add <span style="color:#e83e8c">Circle Layer</span> to display on zoom

``` js
map.addLayer({
    'id': 'earthquakes-point',
    'type': 'circle',
    'source': 'earthquakes',
    'minzoom': 7,
    'paint': {
        'circle-radius': [
            'interpolate',
            [
                'linear'
            ],
            [
                'zoom'
            ],
            7,
            [
                'interpolate',
                [
                    'linear'
                ],
                [
                    'get',
                    'mag'
                ],
                1,
                1,
                6,
                4
            ],
            16,
            [
                'interpolate',
                [
                    'linear'
                ],
                [
                    'get',
                    'mag'
                ],
                1,
                5,
                6,
                50
            ]
        ],
        'circle-color': [
            'interpolate',
            [
                'linear'
            ],
            [
                'get',
                'mag'
            ],
            1,
            'rgba(33,102,172,0)',
            2,
            'rgb(103,169,207)',
            3,
            'rgb(209,229,240)',
            4,
            'rgb(253,219,199)',
            5,
            'rgb(239,138,98)',
            6,
            'rgb(178,24,43)'
        ],
        'circle-stroke-color': 'white',
        'circle-stroke-width': 1,
        'circle-opacity': [
            'interpolate',
            [
                'linear'
            ],
            [
                'zoom'
            ],
            7,
            0,
            8,
            1
        ]
    }
})
```

## Full Source Code:
``` html
<!DOCTYPE html>
<html lang='en'>
<head>
    <meta charset='UTF-8'>
    <meta http-equiv='X-UA-Compatible' content='IE=edge'>
    <meta name='viewport' content='width=device-width, initial-scale=1.0'>
    <link rel='stylesheet' href='https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.css'>
    <script src='https://cdn.barikoi.com/bkoi-gl-js/dist/bkoi-gl.js'></script>
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
    <title>Heatmap Layer</title>
</head>
<body>
    <div id='map'></div>
    <script>
        bkoigl.accessToken = '<your mapbox access token here>'
        const map = new bkoigl.Map({
            container: 'map',
            center: [ -117.5725972781978, 38.0648477267589 ],
            zoom: 5,
            style: 'mapbox://styles/mapbox/dark-v10' // Need Mapbox API Access Token
        })
        map.on('load', () => {
            map.addSource('earthquakes', {
                type: 'geojson',
                data: 'https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_week.geojson'
            })
            map.addLayer({
                'id': 'earthquakes-heat',
                'type': 'heatmap',
                'source': 'earthquakes',
                'maxzoom': 9,
                'paint': {
                    // Increase the heatmap weight based on frequency and property magnitude
                    'heatmap-weight': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'get',
                            'mag'
                        ],
                        0,
                        0,
                        6,
                        1
                    ],
                    // Increase the heatmap color weight weight by zoom level. Heatmap-intensity is a multiplier on top of heatmap-weight
                    'heatmap-intensity': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        0,
                        1,
                        9,
                        3
                    ],
                    // Color ramp for heatmap.  Domain is 0 (low) to 1 (high). Begin color ramp at 0-stop with a 0-transparancy color to create a blur-like effect.
                    'heatmap-color': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'heatmap-density'
                        ],
                        0,
                        'rgba(33,102,172,0)',
                        0.2,
                        'rgb(103,169,207)',
                        0.4,
                        'rgb(209,229,240)',
                        0.6,
                        'rgb(253,219,199)',
                        0.8,
                        'rgb(239,138,98)',
                        1,
                        'rgb(178,24,43)'
                    ],
                    // Adjust the heatmap radius by zoom level
                    'heatmap-radius': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        0,
                        2,
                        9,
                        20
                    ],
                    // Transition from heatmap to circle layer by zoom level
                    'heatmap-opacity': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        7,
                        1,
                        9,
                        0
                    ]
                }
            })
            map.addLayer({
                'id': 'earthquakes-point',
                'type': 'circle',
                'source': 'earthquakes',
                'minzoom': 7,
                'paint': {
                    // Size circle radius by earthquake magnitude and zoom level
                    'circle-radius': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        7,
                        [
                            'interpolate',
                            [
                                'linear'
                            ],
                            [
                                'get',
                                'mag'
                            ],
                            1,
                            1,
                            6,
                            4
                        ],
                        16,
                        [
                            'interpolate',
                            [
                                'linear'
                            ],
                            [
                                'get',
                                'mag'
                            ],
                            1,
                            5,
                            6,
                            50
                        ]
                    ],
                    // Color circle by earthquake magnitude
                    'circle-color': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'get',
                            'mag'
                        ],
                        1,
                        'rgba(33,102,172,0)',
                        2,
                        'rgb(103,169,207)',
                        3,
                        'rgb(209,229,240)',
                        4,
                        'rgb(253,219,199)',
                        5,
                        'rgb(239,138,98)',
                        6,
                        'rgb(178,24,43)'
                    ],
                    'circle-stroke-color': 'white',
                    'circle-stroke-width': 1,
                    // Transition from heatmap to circle layer by zoom level
                    'circle-opacity': [
                        'interpolate',
                        [
                            'linear'
                        ],
                        [
                            'zoom'
                        ],
                        7,
                        0,
                        8,
                        1
                    ]
                }
            })
        })
    </script>
</body>
</html>
```