---
id: route-distance
title: User Route and Distance
---
##
```GET``` User Route and Distance

```
https://barikoi.xyz/v1/api/trace/user/route
```

This api provides a user’s either all the routes (in linestring json format) along with each route’s distance(unit in meter) or total distance(unit in meter) of all the routes between given the start time and end time. 
<br>

start_time ,end_time ,user_id ,api_key ,path are required to make this get request. 
<br>

To determine api’s response this api takes a parameter ‘path’ , it’s value can be either true or false. If true is set to path parameter api wil return all the routes (in linestring json format) along with each route’s distance(unit in meter) and if false is set to path parameter api will return total distance(unit in meter) of all the routes between given the start time and end time.

## API PARAMS

| Parameter          | Value                 | Action        |
| -------------      |:---------------------:| ------------- |
|start_time          | 2021-04-03 16:00:07   |  Required     |
| end_time           | 2021-04-10 16:00:07   |  Required     |
| user_id            | 1                     |  Required     |
| api_key            | {api_key}             |  Required     |
| path               |true or false          |               |

## User Route and Distance API Request Example

``` Js
fetch('https://barikoi.xyz/v1/api/trace/user/route?start_time=2021-04-03 16:00:07&end_time=2021-04-10 16:00:07&user_id=1&api_key={api_key}&path=true')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response
For ```false``` value
```
{
    "data": {
        "total_distance": 44849.628812269635
    },
    "status": 200
}
```

For ```true``` value
```
{
    "data": {
        "total_distance": 44849.628812269635,
        "paths": [
            {
                "geo_json": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            90.3899658,
                            23.8163546
                        ],
                        [
                            90.3899658,
                            23.8163546
                        ],
                        [
                            90.3899103,
                            23.8162896
                        ],
                        [
                            90.3899243,
                            23.8162962
                        ],
                        [
                            90.3899243,
                            23.8162962
                        ],
                        [
                            90.389893,
                            23.816365
                        ],
                        [
                            90.3898205,
                            23.8163224
                        ],
                        [
                            90.3896988,
                            23.816329
                        ],
                       .................
                    ]
                },
                "distance": 3894.422219711506
            },
            {
                "geo_json": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            90.3997324,
                            23.7637859
                        ],
                        [
                            90.39976,
                            23.763711
                        ],
                        [
                            90.3997948,
                            23.7637778
                        ],
                        [
                            90.3998058,
                            23.7638069
                        ],
                        [
                            90.3997738,
                            23.763782
                        ],
                        [
                            90.3997588,
                            23.7637714
                        ],
                        [
                            90.3997564,
                            23.7638692
                        ],
                        [
                            90.3998379,
                            23.7638768
                        ],
                        [
                            90.3999012,
                            23.7638976
                        ],
                       .................
                    ]
                },
                "distance": 6851.779026333792
            },
            {
                "geo_json": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            90.3766652,
                            23.8230482
                        ],
                        [
                            90.3766349,
                            23.8230416
                        ],
                        [
                            90.3766148,
                            23.8230067
                        ],
                        [
                            90.3765054,
                            23.8229733
                        ],
                        [
                            90.3762359,
                            23.8229212
                        ],
                        [
                            90.3758691,
                            23.8229222
                        ],
                        [
                            90.3756086,
                            23.8228644
                        ],
                        [
                            90.3755076,
                            23.8228317
                        ],
                        [
                            90.3752925,
                            23.8227868
                        ],
                        [
                            90.3751002,
                            23.8227809
                        ],
                        [
                            90.3747993,
                            23.8227232
                        ],
                      ................
                    ]
                },
                "distance": 5485.428007188529
            },
            {
                "geo_json": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            90.3937594,
                            23.8215306
                        ],
                        [
                            90.3937697,
                            23.8215171
                        ],
                        [
                            90.3937789,
                            23.8215214
                        ],
                        [
                            90.3938083,
                            23.821332
                        ],
                        [
                            90.393831,
                            23.8211848
                        ],
                        [
                            90.3937918,
                            23.8214345
                        ],
                        [
                            90.3937826,
                            23.8215067
                        ],
                        [
                            90.3938049,
                            23.8214827
                        ],
                        [
                            90.3938165,
                            23.8214075
                        ],
                        [
                            90.3937806,
                            23.8215061
                        ],
                        .............
                    ]
                },
                "distance": 10091.098819319852
            },
            {
                "geo_json": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            90.3598612,
                            23.809024
                        ],
                        [
                            90.3598521,
                            23.8090342
                        ],
                        [
                            90.3598667,
                            23.809022
                        ],
                        [
                            90.3598909,
                            23.8090478
                        ],
                        [
                            90.3598991,
                            23.8090541
                        ],
                        [
                            90.3599079,
                            23.8090605
                        ],
                        [
                            90.35993,
                            23.8090768
                        ],
                        [
                            90.3601519,
                            23.80908
                        ],
                      ................
                    ]
                },
                "distance": 11025.259591191956
            },
            {
                "geo_json": {
                    "type": "LineString",
                    "coordinates": [
                        [
                            90.3927005,
                            23.8121105
                        ],
                        [
                            90.392699,
                            23.8121046
                        ],
                        [
                            90.3926925,
                            23.8121048
                        ],
                        [
                            90.3926833,
                            23.8121046
                        ],
                        [
                            90.392658,
                            23.8121146
                        ],
                        [
                            90.3926267,
                            23.8121372
                        ],
                        [
                            90.3926096,
                            23.8121628
                        ],
                        [
                            90.3925964,
                            23.8121725
                        ],
                        [
                            90.3925693,
                            23.8121727
                        ],
                       ...........
                    ]
                },
                "distance": 7501.641148524003
            }
        ]
    },
    "status": 200
}
```  

