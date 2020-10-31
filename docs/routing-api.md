---
id: route-api
title: Routing Api
---
##
```GET``` Routing
```
https://barikoi.xyz/v1/api/route/API_KEY/90.362548828125,23.94107556246209;90.31585693359375,24.134221690669204?overview=true&alternatives=true&steps=true&hints=
```

This api provides routing details for two location points.

## API PARAMS

| Parameter     | Value         |
| ------------- |:-------------:| 
| overview      | true          |
| alternatives  | true          | 
| steps         | true          |
| hints         |    ;          |

## Routing API Request Example

``` Js
<code class="code-snippet" id="api-routing-example">
fetch('https://barikoi.xyz/v1/api/route/API_KEY/90.362548828125,23.94107556246209;90.31585693359375,24.134221690669204?overview=true&alternatives=true&steps=true&hints=')
.then(response => response.json())
.catch(error => console.error('Error:', error))
.then(response => console.log('Success:', response))
</code>
```

## Example Response

```
{
    "code": "Ok",
    "routes": [
        {
            "geometry": "g}bqCmhpfPjf@uE_P_~BueAjZ}sDpCg@~t@_{DdfF}ZbrCodA`bCsM{m@ojCaUw^meAmg@eS_~A_Ok}AbFmXbQoi@mmAuxEfS",
            "legs": [
                {
                    "steps": [],
                    "distance": 33452.2,
                    "duration": 2481.4,
                    "summary": "",
                    "weight": 2481.4
                }
            ],
            "distance": 33452.2,
            "duration": 2481.4,
            "weight_name": "routability",
            "weight": 2481.4
        }
    ],
    "waypoints": [
        {
            "hint": "V10DgFldA4AAAAAAJwAAAAAAAAAfAQAAAAAAAFZN10EAAAAA6SFHQwAAAAAnAAAAAAAAAB8BAACEAAAA6tliBeZObQG10mIF1E9tAQAATwvGEH3j",
            "distance": 189.684241,
            "name": "",
            "location": [
                90.364394,
                23.940838
            ]
        },
        {
            "hint": "xy0BgPzPAoBDAAAAKwAAAL8QAAAtBgAAjQGVQqNFPkI1VJRFXcnaREMAAAArAAAAvxAAAC0GAACEAAAAsjtiBbBHcAFRHGIFTkJwATMAnwrGEH3j",
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
For each request of Routing with all parameter 2 is counted.

##
```GET``` Nearest
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
For each request of Routing with all parameter 2 is counted.
##
```GET``` Route Match
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
For each request of Route Match with all parameter 2 is counted.