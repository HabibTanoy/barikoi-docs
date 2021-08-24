---
id: geo-server
title:Reverse Geocoding (Server)
---

##
```GET``` Reverse Geocoding Server API

```
https://barikoi.xyz/v1/api/search/reverse/geocode/server/API_KEY/place?longitude=90.36744611263278&latitude=23.81970957278533&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true
```
This API initially returns id, address, area, city, distance_within_meters without any additional call.
Valid additional parameters are:
<br>

- `district` : If district is set to true the district of the coresponding location will be provided.
<br>

- `post_code` : when post_code is set to true the postcode of the location will be provided with the response.
<br>

- `country` : If country is set to true the country of the coresponding location will be provided with the response.
<br>

- `sub_district` : If sub_district is set to true the sub_district of the coresponding location will be provided with the response.
<br>

- `union` : If union is set to true the union of the coresponding location will be provided with the response.
<br>

- `pauroshova` : If pauroshova is set to true the pauroshova of the coresponding location will be provided with the response.
<br>

- `location_type` : The address is categorize between Urban, Semi-Urban and Rural which is referd as location_type. When location_type is set to true API will return the location_type along with the response.
<br>

- `division` : If division is set to true the division of the coresponding location will be provided with the response.
<br>

- `address` : If address is set to true, API will return the details address componants of the base address line along with the basic response.
<br>

- `area` : If area is set to true, it will return the details area componant like area, sub area of the location.

## API PARAMS

| Parameter     | Value         | Action         |
| ------------- |:-------------:| -------------  |
| longitude     | 90.36744611263278       | Required       |
| latitude      | 23.81970957278533       | Required       |
| district      | true          |                |
| post_code     | true          |                |
| country       | true          |                |
| sub_district  | true          |                |
| union         | true         |                |
| pauroshova    | true         |                |
| location_type | true          |                |
| division      | true          |                |
| address       | true          |                |
| area          | true          |                |


## Reverse Geocoding Server API Request Example

``` Js                                    
fetch('https://barikoi.xyz/v1/api/search/reverse/geocode/server/API_KEY/place?longitude=90.36744611263278&latitude=23.81970957278533&district=true&post_code=true&country=true&sub_district=true&union=true&pauroshova=true&location_type=true&division=true&address=true&area=true')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "place": {
        "id": 534001,
        "distance_within_meters": 3.9083,
        "address": "House 20, Avenue 3, Lane 25, Block D, Section 11",
        "area": "Mirpur",
        "city": "Dhaka",
        "postCode": 1216,
        "location_type": "Urban",
        "district": "Dhaka",
        "country": "Bangladesh",
        "sub_district": "Pallabi",
        "union": null,
        "pauroshova": null,
        "division": "Dhaka",
        "address_components": {
            "place_name": null,
            "house": "House 20",
            "road": " Avenue 3"
        },
        "area_components": {
            "area": "Mirpur",
            "sub_area": "Section 11"
        }
    },
    "status": 200
}    
```
```For each request of Reverse Geocoding (Server) with all parameter 11 API call is counted.```

Note: Any additional parameters with value ```true``` will be counted.