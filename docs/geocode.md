---
id: geo-code
title:Geocoding
---
##
```GET``` Geocoding API

```
https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/place_id
```

Geocode API for Developers. This returns location data of a specific place.

## URL PARAM

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- |
| place_id      | 3354          |  Required     |

## Geocoding API Request Example

``` Js
fetch('https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/3354')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "place": {
        "id": 3354,
        "address": "Barikoi Office, House 192, Road 2",
        "area": "Mirpur Dohs",
        "city": "Dhaka",
        "postcode": 1216,
        "ucode": "BKOI2017",
        "longitude": "90.3673348642485",
        "latitude": "23.8340107016275",
        "pType": "Office",
        "subType": "Head Office"
    },
    "status": 200
}    
```
For each request of Geocoding API with all parameter 1 is counted.