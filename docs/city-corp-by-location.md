---
id: city-corp-by-location
title: City Corporation by Geolocation
---
##
```GET``` City Corporation by Geolocation

```
https://barikoi.xyz/v1/api/search/dncc/API_KEY/LONGITUDE/LATITUDE
```
Returns the City Corporation of given longitude and latitude.

## API PARAMS

| Parameter     | Value             | Action        |
| ------------- |:-------------:    | ------------- | 
| longitude     | 90.418619474572   |  Required     | 
| latitude      | 23.83136348674859 |  Required     |

## City Corporation by Geolocation API Request Example

``` Js                                    
fetch('https://barikoi.xyz/v1/api/search/dncc/API_KEY/90.4186194745721/23.83136348674859')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

``` js
{
    "message": "DNCC",
    "status": "200"
}
```
```For each request of City Corporation by Geolocation API with all parameter 1 API call is counted.```