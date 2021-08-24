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
| place_id      | 514148          |  Required     |

## Geocoding API Request Example

``` Js
fetch('https://barikoi.xyz/v1/api/search/geocode/API_KEY/place/514148')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "place": {
        "id": 514148,
        "address": "House 21, Road 1, Block KHA, Doaripara",
        "area": "Mirpur",
        "city": "Dhaka",
        "postcode": 1216,
        "ucode": "KYHG5779",
        "longitude": "90.35798739641906",
        "latitude": "23.825456535386472",
        "pType": "Residential",
        "subType": "HOUSE"
    },
    "status": 200
}
```
```For each request of Geocoding API with all parameter 1 API call is counted.```