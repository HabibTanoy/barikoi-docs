---
id: route-api
title: Routing Api
---
##
```GET``` Routing
```
https://barikoi.xyz/v1/api/route/API_KEY/90.362548828125,23.94107556246209;90.31585693359375,24.134221690669204
```

This api provides routing details for two location points.

## Routing API Request Example

``` Js
fetch('https://barikoi.xyz/v1/api/route/API_KEY/90.362548828125,23.94107556246209;90.31585693359375,24.134221690669204')
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))
```

## Example Response

```
{
    "code": "Ok",
    "routes": [
        {
            "geometry": "g}bqCmhpfPdMaDqEqO`U}MiFc`BueAjZonBlGisJs_@uh@gManAeJaaBzGsZbQ}v@jsAw`@jwAqt@p`BiBtjAvZzhAga@fAmXbQoi@mmA{vA~Ly`CfE",
            "legs": [
                {
                    "steps": [],
                    "distance": 31580.5,
                    "duration": 5011.5,
                    "summary": "",
                    "weight": 5011.5
                }
            ],
            "distance": 31580.5,
            "duration": 5011.5,
            "weight_name": "routability",
            "weight": 5011.5
        }
    ],
    "waypoints": [
        {
            "hint": "9NsKgPbbCoAAAAAAUQAAAAAAAABWAgAAAAAAAFZN10EAAAAA6SFHQwAAAABRAAAAAAAAAFYCAADlAAAA6tliBeZObQG10mIF1E9tAQAATwvicBOH",
            "distance": 189.684241,
            "name": "",
            "location": [
                90.364394,
                23.940838
            ]
        },
        {
            "hint": "xc0KgNPNCoCGAAAAVwAAAH8hAABcDAAAjQGVQqNFPkI1VJRFXcnaRIYAAABXAAAAfyEAAFwMAADlAAAAsjtiBbBHcAFRHGIFTkJwATMAnwricBOH",
            "distance": 830.734383,
            "name": "Mouchak - Fulbari Road",
            "location": [
                90.32389,
                24.1356
            ]
        }
    ]
}
```
```For each request of Routing with all parameter 2 API call is counted.```

### ```POST``` Route Optimization
```
http://barikoi.xyz/v2/api/route/optimized
```
This api provides routing details from source to destination points. Additional waypoints can also be included in order to get more precise routing experience. Maximum 50 waypoints can be included as additional points. `Content-Types`:`application/json` should be attached to the request header in order to match the correct request format.

Note: Waypoints will be sorted based on given id in ascending order. 


## API PARAMS

| Parameter     | Type                   |Action          | Default Value  |
| ------------- |:---------------------: | :-------------:|:-------------:|
| api_key       | string                 |Required        |               |
| source        | string                 |Required        |               |
| destination   | string                 |Required        |               |
|geo_points     |array of point elements |                |               |
|id             | integer                |Required        |               |
|point          | string                 |Required        |               |
|profile        | string                 |                |Car            |
 


## Route Optimization Request Example
```JS
let data = {
    "api_key": {API_KEY},
    "source": "23.746086,90.37368",
    "destination": "23.746214,90.371654",
    "profile": "car",
    "geo_points": [
        {"id": 1, "point": "23.746086,90.37368"},
        {"id": 2, "point": "23.74577,90.373389"},
        {"id": 3, "point": "23.74442,90.372909"},
        {"id": 4, "point": "23.743961,90.37214"}
      ]
   };
      fetch("http://barikoi.xyz/v2/api/route/optimized",
    {
       headers: {
        'Content-Type': 'application/json'
       },
        method: "POST",
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
```

## Example Response
```
{
    "hints": {
        "visited_nodes.sum": 116,
        "visited_nodes.average": 23.2
    },
    "info": {
        "copyrights": [
            "GraphHopper",
            "OpenStreetMap contributors"
        ],
        "took": 4
    },
    "paths": [
        {
            "distance": 1845.65,
            "weight": 1052.020412,
            "time": 922830,
            "transfers": 0,
            "points_encoded": true,
            "bbox": [
                90.371275,
                23.739794,
                90.375322,
                23.746345
            ],
            "points": "c{|oCacrfPh@hA~B~ErCcBlEkC`CqAxP}GDNyKtEiChAmIxE|@fB}@gB_L~GK[d@Y",
            "instructions": [
                {
                    "distance": 0,
                    "sign": 5,
                    "interval": [
                        0,
                        0
                    ],
                    "text": "Waypoint 1",
                    "time": 0,
                    "street_name": ""
                },
                {
                    "distance": 43.746,
                    "heading": 237.97,
                    "sign": 0,
                    "interval": [
                        0,
                        1
                    ],
                    "text": "Continue onto Dhanmondi 9/A",
                    "time": 21873,
                    "street_name": "Dhanmondi 9/A"
                },
                {
                    "distance": 0,
                    "sign": 5,
                    "last_heading": 237.9665610516848,
                    "interval": [
                        1,
                        1
                    ],
                    "text": "Waypoint 2",
                    "time": 0,
                    "street_name": ""
                },
                {
                    "distance": 134.577,
                    "heading": 237.97,
                    "sign": 0,
                    "interval": [
                        1,
                        2
                    ],
                    "text": "Continue onto Dhanmondi 9/A",
                    "time": 67289,
                    "street_name": "Dhanmondi 9/A"
                },
                {
                    "distance": 97.212,
                    "sign": -2,
                    "interval": [
                        2,
                        3
                    ],
                    "text": "Turn left onto Satmasjid Road",
                    "time": 48606,
                    "street_name": "Satmasjid Road"
                },
                {
                    "distance": 0,
                    "sign": 5,
                    "last_heading": 148.51066049790938,
                    "interval": [
                        3,
                        3
                    ],
                    "text": "Waypoint 3",
                    "time": 0,
                    "street_name": ""
                },
                {
                    "distance": 566.267,
                    "heading": 148.51,
                    "sign": 0,
                    "interval": [
                        3,
                        6
                    ],
                    "text": "Continue onto Satmasjid Road",
                    "time": 283135,
                    "street_name": "Satmasjid Road"
                },
                {
                    "distance": 562.885,
                    "sign": 8,
                    "interval": [
                        6,
                        10
                    ],
                    "text": "Make a U-turn onto Satmasjid Road",
                    "time": 281444,
                    "street_name": "Satmasjid Road"
                },
                {
                    "distance": 63.039,
                    "sign": -2,
                    "interval": [
                        10,
                        11
                    ],
                    "text": "Turn left onto Road 8A - Rayer Bazar Staff Quarter Road",
                    "time": 31520,
                    "street_name": "Road 8A - Rayer Bazar Staff Quarter Road"
                },
                {
                    "distance": 0,
                    "sign": 5,
                    "last_heading": 236.64302854493263,
                    "interval": [
                        11,
                        11
                    ],
                    "text": "Waypoint 4",
                    "time": 0,
                    "street_name": ""
                },
                {
                    "distance": 63.039,
                    "heading": 56.64,
                    "sign": -98,
                    "interval": [
                        11,
                        12
                    ],
                    "text": "Make a U-turn onto Road 8A - Rayer Bazar Staff Quarter Road",
                    "time": 31520,
                    "street_name": "Road 8A - Rayer Bazar Staff Quarter Road"
                },
                {
                    "distance": 273.833,
                    "sign": -2,
                    "interval": [
                        12,
                        13
                    ],
                    "text": "Turn left onto Satmasjid Road",
                    "time": 136917,
                    "street_name": "Satmasjid Road"
                },
                {
                    "distance": 41.051,
                    "sign": 8,
                    "interval": [
                        13,
                        15
                    ],
                    "text": "Make a U-turn onto Satmasjid Road",
                    "time": 20526,
                    "street_name": "Satmasjid Road"
                },
                {
                    "distance": 0,
                    "sign": 4,
                    "last_heading": 147.1298322116441,
                    "interval": [
                        15,
                        15
                    ],
                    "text": "Arrive at destination",
                    "time": 0,
                    "street_name": ""
                }
            ],
            "legs": [],
            "details": [],
            "ascend": 0,
            "descend": 0,
            "snapped_waypoints": "c{|oCacrfP??h@hArGzBzAtBcM`C"
        }
    ]
}
```
```The API call for 1 request will be based on the number of points passed in a request. For Example, The request has 5 points for optimization, therefore the number of API call would be 5.```

### ```POST``` Location Optimized
```
https://barikoi.xyz/v2/api/route/sorted
```

Location sorting api takes a set of locations with additional payload attached with each location considering the first one as the source and the last one as the destination. 
It returns with the sorted location set that was provided considering the distance between the locations in Kilometers from source to destination.
Maximum 50 locations can be attached in a row. `Content-Types:application/json` should be attached to the request header in order to match the correct request format.

## API PARAMS

| Parameter     | Type                   |Action          |
| ------------- |:---------------------: | :-------------:|
| api_key       | string                 |Required        |
| location      | array                  |Required        |
| point         | object                 |Required        |
|lat            |float                   |Required        |
|lon            | float                  |Required        |
|additional_payload  | array             |                |

## Location Optimization Request Example
```JS
{
    "api_key" : {API_KEY},
    "locations": [
        {"point": {"lat": 24.439648,"lon" : 90.731277}, "additional_payload" : [{"address" : "Kishoreganj Thana"}]},
        {"point": {"lat": 23.74608583,"lon" : 90.37368}, "additional_payload" : [{"address" : "House 36, Road 9/A"}]},
        {"point": {"lat": 24.440899,"lon" : 90.771103}, "additional_payload" : [{"address" : "Monju Villa, House 1244, Hossainpur Road, Nogua"}]},
        {"point": {"lat": 23.74577034,"lon" : 90.37338898}, "additional_payload" : [{"address" : "House 38, Road 9/A"}]},
        {"point": {"lat": 23.74441997,"lon" : 90.37290861}, "additional_payload" : [{"address" : "Dhanmondi, Road 8/a"}]}
    ]
}
```

## Example Response
```
{
    "sorted_waypoints": [
        {
            "point": {
                "lat": 24.439648,
                "lon": 90.731277
            },
            "additional_payload": [
                {
                    "address": "Kishoreganj Thana"
                }
            ],
            "index": 1
        },
        {
            "point": {
                "lat": 24.440899,
                "lon": 90.771103
            },
            "additional_payload": [
                {
                    "address": "Monju Villa, House 1244, Hossainpur Road, Nogua"
                }
            ],
            "index": 2
        },
        {
            "point": {
                "lat": 23.74608583,
                "lon": 90.37368
            },
            "additional_payload": [
                {
                    "address": "House 36, Road 9/A"
                }
            ],
            "index": 3
        },
        {
            "point": {
                "lat": 23.74577034,
                "lon": 90.37338898
            },
            "additional_payload": [
                {
                    "address": "House 38, Road 9/A"
                }
            ],
            "index": 4
        },
        {
            "point": {
                "lat": 23.74441997,
                "lon": 90.37290861
            },
            "additional_payload": [
                {
                    "address": "Dhanmondi, Road 8/a"
                }
            ],
            "index": 5
        }
    ],
    "status": 200
}
```
```For each request of Location Optimized API with all parameter 2 API call is counted.```

### ```GET``` Snap to Road
```
https://barikoi.xyz/v1/routing/API_KEY/nearest?point=23.80474653651567,90.36288913339376
```

## API PARAMS

| Parameter     | Value                                   | Action        |
| ------------- |:-------------:                          | ------------- | 
| point         | 23.80474653651567,90.36288913339376     |  Required     |

## Example Response

```
{
    "coordinates": [
        90.36288202934098,
        23.804755823392888
    ],
    "distance": 1.2604423448728288,
    "type": "Point"
}
```
```For each request of Routing with all parameter 2 API call is counted.```
### ```GET``` Route Match
```
https://barikoi.xyz/v1/routing/API_KEY/matching?points=90.38436119310136,23.7267599142696;90.38438265469962,23.726622279057658
```

## API PARAMS

| Parameter     | Value                                                                    |Action |
| ------------- |:-------------:                                                           |------ |
| points        | 90.38436119310136,23.7267599142696;90.38438265469962,23.726622279057658 |Required|

## Example Response

```
{
    "geometry": {
        "coordinates": [
            [
                90.384425,
                23.726761
            ],
            [
                90.384427,
                23.726622
            ]
        ],
        "type": "LineString"
    },
    "distance": 15.5,
    "status": 200
}
```
```For each request of Route Match with all parameter 2 API call is counted.```