---
id: geo-server
title:Reverse Geocoding (Server)
---

##
```GET``` Reverse Geocoding Server API

```
https://barikoi.xyz/v1/api/search/reverse/geocode/server/API_KEY/place?longitude=90.1224&latitude=23.7567&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true
```
Returns an address given longitude and latitude.

## API PARAMS

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- |
| longitude     | 90.1224       |  Required     |
| latitude      | 23.7567       |  Required     |
| district      | true          |               |
| post_code     | true          |               |
| country       | true          |               |
| sub_district  | true          |               |
| union         | true          |               |
| pauroshova    | true          |               |
| location_type | true          |               |


## Reverse Geocoding Server API Request Example

``` Js                                    
fetch('https://barikoi.xyz/v1/api/search/reverse/geocode/server/API_KEY/place?longitude=90.1224&latitude=23.7567&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "place": {
        "id": 394605,
        "distance_within_meters": 0,
        "address": "Charigram",
        "area": " Singair",
        "city": " Manikganj",
        "postCode": 1820,
        "location_type": "Rural",
        "district": "Manikganj",
        "country": "Bangladesh",
        "sub_district": "Singair",
        "union": "Charigram",
        "pauroshova": null
    },
    "status": 200
}    
```
For each request of Reverse Geocoding (Server) with all parameter 8 is counted.