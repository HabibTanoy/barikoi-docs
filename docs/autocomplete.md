---
id: autocomplete
title: Autocomplete
---

## Method
```GET``` Autocomplete API

## URL
```
https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=shopno&latitude=23.873751&longitude=90.396454&scale=0.5
```
Barikoi Autocomplete. Returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode

## API PARAMS

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- | 
| q             | shopno        |  Required     |
| longitude     | 90.3964       |               |
| latitude      | 23.8737       |               |
| scale         | 0.5           |               |

Here, Latitude and Longitude and Scale are optional parameters.When Latitude and Longitude are provided in the request parameter then the search result is returned based on the provided longitude latitude.When Scale is provided system will search inside the particular area (in Kilometer) radius. 

## API Request Example

```Js
fetch("https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=shopno&latitude=23.873751&longitude=90.396454&scale=0.5")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response
```
{
    "places": [
        {
            "id": 613764,
            "longitude": "90.40037488836059",
            "latitude": "23.876015798205852",
            "address": "Shopno Bilash, House 14, Road 7/c, Sector 9",
            "city": "Dhaka",
            "area": "Uttara",
            "postCode": 1230,
            "pType": "Residential",
            "uCode": "ZHOP9326"
        },
        {
            "id": 615302,
            "longitude": "90.39863960696596",
            "latitude": "23.87394939766196",
            "address": "Shopn Pori, House 10, Road 36, Sector 7",
            "city": "Dhaka",
            "area": "Uttara",
            "postCode": 1230,
            "pType": "Residential",
            "uCode": "OUCU1540"
        },
        {
            "id": 615307,
            "longitude": "90.39847472805957",
            "latitude": "23.87391826373943",
            "address": "Shipon Hair Cutting, House 12, Road 36, Sector 7",
            "city": "Dhaka",
            "area": "Uttara",
            "postCode": 1230,
            "pType": "Shop",
            "uCode": "IQFM0605"
        },
        {
            "id": 613150,
            "longitude": "90.39759377788192",
            "latitude": "23.876060113158026",
            "address": "Daily Shoping, House 4, Road 3/f, Sector 9",
            "city": "Dhaka",
            "area": "Uttara",
            "postCode": 1230,
            "pType": "Shop",
            "uCode": "TGKR6447"
        }
        .......
    ],
    "status": 200
}
```
For each request of Autocomplete API with all parameter 1 is counted.

To get post office autocomplete just add post_office param to request body with the value true

## Post Office Autocomplete API
```
https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Mirpur&post_office=true
```
Barikoi Post Office Autocomplete.This API will return only post offices. Returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode

## API Params

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- |
| q             | Mirpur        |  Required     |
| post_office   | true          |  Required     | 

## Autocomplete API Request Example

``` Js
fetch("https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Mirpur&post_office=true")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```
## Example Response
```
{
    "places": [
        {
            "id": 4,
            "latitude": "23.811978035351842",
            "longitude": "90.34750800579786",
            "address": "Chiriyakhana Post Office, Zoo Road, Section 1",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Government",
            "uCode": "WEST4687"
        },
        {
            "id": 5,
            "latitude": "23.803282712061726",
            "longitude": "90.36128953099252",
            "address": "Mirpur Post Office, Main Road, Section 2",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Government",
            "uCode": "BAND7192"
        },
        {
            "id": 6,
            "latitude": "23.820675852230316",
            "longitude": "90.3647304698825",
            "address": "Pallabi Post Office, Begum Rokeya Sarani, Purobi",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Government",
            "uCode": "ALSO4104"
        }
    ],
    "status": 200
}       
```
For each request of Post Office Autocomplete API with all parameter 2 is counted.