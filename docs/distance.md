---
id: distance
title: Distance
---
##
```GET``` Distance API

```
https://barikoi.xyz/v1/api/distance/API_KEY/SOURCE_LONGITUDE,SOURCE_LATITUDE/TARGET_LONGITUDE,TARGET_LATITUDE
```
Distance API for Developers. This returns the distance between of a two place.

## API PARAMS

| Parameter          | Value         | Action        |
| -------------      |:-------------:| ------------- |
| SOURCE_LONGITUDE   | 90.39534587   |  Required     |
| SOURCE_LATITUDE    | 23.86448886   |  Required     |
| TARGET_LONGITUDE   | 90.3673       |  Required     |
| TARGET_LATITUDE    | 23.8340       |  Required     |

## Distance API Request Example

``` Js
fetch('https://barikoi.xyz/v1/api/distance/API_KEY/90.39534587,23.86448886/90.3673,23.8340')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```
## Example Response

```
{
    "Distance": "7.8473 KM",
    "status": 200
}   
```      
```For each request of Distance API with all parameter 1 API call is counted.```