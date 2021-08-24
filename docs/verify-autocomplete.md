---
id: verify-autocomplete
title: Autocomplete 
---

## Method
```GET``` Autocomplete API

## URL
```
https://barikoi.xyz/v1/api/search/verify/autocomplete/API_KEY/place?q=House 432/1/b, Iqbal Road, West Shewrapara
```
Barikoi Verify Autocomplete returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode

## API PARAMS

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- | 
| q             | House 432/1/b, Iqbal Road, West Shewrapara        |  Required     |
 

## API Request Example

```Js
fetch("https://barikoi.xyz/v1/api/search/verify/autocomplete/API_KEY/place?q=House 432/1/b, Iqbal Road, West Shewrapara")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response
```
{
    "places": [
        {
            "id": 490528,
            "longitude": "90.372454226017",
            "latitude": "23.788481478319",
            "address": "Nahar Villa, House 432/1/b, Iqbal Road, West Shewrapara",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Residential",
            "uCode": "ZRHT8492"
        },
        {
            "id": 517315,
            "longitude": "90.374908447266",
            "latitude": "23.787975885228",
            "address": "West Shewrapara",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Admin",
            "uCode": "PQRE3015"
        },
        {
            "id": 174616,
            "longitude": "90.37171393632889",
            "latitude": "23.78809093237229",
            "address": "Takwa House, House 432/8/1, Iqbal Road, West Shewrapara",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Residential",
            "uCode": "JFKT8749"
        }
        .......
    ],
    "status": 200
}
```
```For each request of Autocomplete API with all parameter 1 API call is counted.```
