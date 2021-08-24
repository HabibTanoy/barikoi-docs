---
id: nearby
title: Nearby
---
## 
```GET``` Nearby API

```
https://barikoi.xyz/v2/api/search/nearby/API_KEY/0.5/10?longitude=90.36668110638857&latitude=23.83723803415923
```
All Nearby API counts according to the limit parameter or number of places returned in response data

## API PARAMS

| Parameter     | Value                 | Action        |
| ------------- |:-------------:        | ------------- | 
| longitude     | 90.36668110638857     |  Required     |
| latitude      | 23.83723803415923     |  Required     |
| distance      | 0.5 (km)              |  Required     |
| limit         | 10                    |  Required     | 

## Nearby API Request Example

``` Js
fetch('https://barikoi.xyz/v2/api/search/nearby/API_KEY/0.5/10?longitude=90.36668110638857&latitude=23.83723803415923')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```
## Example Response
```
{
    "places": [
        {
            "id": 452923,
            "name": "Artland",
            "distance_in_meters": 9.91042449889066,
            "longitude": "90.36668747663498",
            "latitude": "23.83714909804975",
            "pType": "Education",
            "Address": "Artland, Jol Torongo, House 555, Road 9",
            "area": "Mirpur Dohs",
            "city": "Dhaka",
            "postCode": 1216,
            "subType": "Art School",
            "uCode": "IDIX1880",
            "ST_AsText(location)": "POINT(90.36668747663498 23.83714909804975)"
        },
        {
            "id": 485763,
            "name": "Mulytic Labs",
            "distance_in_meters": 11.24627601291792,
            "longitude": "90.36672234535217",
            "latitude": "23.837144191228138",
            "pType": "Office",
            "Address": "Mulytic Labs, Jol Torongo, House 555, Road 9",
            "area": "Mirpur Dohs",
            "city": "Dhaka",
            "postCode": 1216,
            "subType": "Branch Office",
            "uCode": "IDVH3378",
            "ST_AsText(location)": "POINT(90.36672234535217 23.837144191228138)"
        },
        {
            "id": 512618,
            "name": "Touch-Up Beauty Parlour",
            "distance_in_meters": 11.700339826282454,
            "longitude": "90.366759896278",
            "latitude": "23.837161365103",
            "pType": "Shop",
            "Address": "Touch-Up Beauty Parlour, Jol Torongo, House 555, Road 9",
            "area": "Mirpur Dohs",
            "city": "Dhaka",
            "postCode": 1216,
            "subType": "Womens Parlour",
            "uCode": "FLDL1270",
            "ST_AsText(location)": "POINT(90.366759896278 23.837161365103)"
        }
         .......
    ]
}         
```


##
``` GET``` Nearby API with Category

``` js
https://barikoi.xyz/v2/api/search/nearby/category/API_KEY/1/10?longitude=90.36668110638857&&latitude=23.83723803415923&ptype=office
```
This returns data with the specific pTypes from the list below:
 

|               |          pTypes         |         |
| ------------- |:-------------:          | ------------- |
| Admin         | Fuel                    |  Others     |
| Agricultural  | Government              |  Recreation     | 
| Bank          | Healthcare              |  Religious Place     |
| Commercial    | Hotel                   |  Residential     |
| Construction  | Industry                |  Shop     |
| Education     | Landmark                |  Transportation     |
| Food          | Office                  |  Utility     |

## API PARAMS

| Parameter     | Value                | Action        |
| ------------- |:-------------:       | ------------- |
| longitude     | 90.36668110638857    |  Required     |
| latitude      | 23.83723803415923    |  Required     | 
| ptype         | Office               |  Required     |
| distance      | 1 (km)               |  Required     |
| limit         | 10                   |  Required     |

## Nearby API with Category Request Example

```Js
fetch('https://barikoi.xyz/v2/api/search/nearby/category/API_KEY/1/10?longitude=90.36668110638857&&latitude=23.83723803415923&ptype=office')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```
## Example Response

```
{
    "places": [
        {
            "id": 485763,
            "name": "Mulytic Labs",
            "distance_in_meters": 11.24627601291792,
            "longitude": "90.36672234535217",
            "latitude": "23.837144191228138",
            "Address": "Mulytic Labs, Jol Torongo, House 555, Road 9",
            "city": "Dhaka",
            "area": "Mirpur Dohs",
            "pType": "Office",
            "subType": "Branch Office",
            "uCode": "IDVH3378",
            "contact_person_phone": "+880-131-848-54",
            "ST_AsText(location)": "POINT(90.36672234535217 23.837144191228138)"
        },
        {
            "id": 515213,
            "name": "Digitruck Bangladesh",
            "distance_in_meters": 67.28097548803157,
            "longitude": "90.367076396942",
            "latitude": "23.837723194896",
            "Address": "Digitruck Bangladesh, House 625, Road 10",
            "city": "Dhaka",
            "area": "Mirpur Dohs",
            "pType": "Office",
            "subType": "Head Office",
            "uCode": "HNOM8349",
            "contact_person_phone": "01312 667373",
            "ST_AsText(location)": "POINT(90.367076396942 23.837723194896)"
        },
        {
            "id": 415887,
            "name": "Acme Technologies Limited",
            "distance_in_meters": 69.1944507498262,
            "longitude": "90.36733120679855",
            "latitude": "23.83742142635796",
            "Address": "Acme Technologies Limited, House 630, Road 9",
            "city": "Dhaka",
            "area": "Mirpur Dohs",
            "pType": "Office",
            "subType": "HEAD OFFICE",
            "uCode": "QMVA4960",
            "contact_person_phone": null,
            "ST_AsText(location)": "POINT(90.36733120679855 23.83742142635796)"
        }
        .......
    ]
}              
```


##
```GET``` Nearby API with Multiple Types

``` js
https://barikoi.xyz/v2/api/search/nearby/multi/type/API_KEY/5/5?q=atm,school&longitude=90.41634254157543&latitude=23.832393074088362
```
This returns data with specific [place types](https://docs.barikoi.com/docs/place-types)

## API PARAMS

| Parameter     | Value                | Action        |
| ------------- |:-----------------:   | ------------- | 
| longitude     | 90.36668110638857    |  Required     |
| latitude      | 23.83723803415923    |  Required     | 
| q             | atm,school           |  Required     |
| distance      | 5 (km)               |  Required     |
| limit         | 5                    |  Required     |

## Nearby API with Multiple Types Request Example

``` Js
fetch('https://barikoi.xyz/v2/api/search/nearby/multi/type/API_KEY/5/5?q=atm,school&longitude=90.41634254157543&latitude=23.832393074088362')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```
## Example Response

```
{
    "places": [
        {
            "id": 502862,
            "name": "Standard Chartered Bank (Scb) Atm",
            "distance_in_meters": 253.05800281013194,
            "longitude": "90.418757200241",
            "latitude": "23.832941430342",
            "pType": "Bank",
            "Address": "Standard Chartered Bank (Scb) Atm, Lotus Kamal Tower 1, New Airport Road, Nikunja 2",
            "area": "Nikunja",
            "city": "Dhaka",
            "postCode": 1229,
            "subType": "ATM",
            "uCode": "UWZO0581",
            "ST_AsText(location)": "POINT(90.418757200241 23.832941430342)"
        },
        {
            "id": 119584,
            "name": "Jane Alam Government High School",
            "distance_in_meters": 264.91397210547393,
            "longitude": "90.41447706520559",
            "latitude": "23.830730510001846",
            "pType": "Education",
            "Address": "Jane Alam Government High School, Tanpara, Nikunja 2",
            "area": "Nikunja",
            "city": "Dhaka",
            "postCode": 1229,
            "subType": "SCHOOL",
            "uCode": "ABLE7705",
            "ST_AsText(location)": "POINT(90.41447706520559 23.830730510001846)"
        },
        {
            "id": 392671,
            "name": "Genius Model School",
            "distance_in_meters": 330.0645537248065,
            "longitude": "90.41713178157806",
            "latitude": "23.829513859028346",
            "pType": "Education",
            "Address": "Genius Model School, House 27, Road 04, Nikunja 2",
            "area": "Nikunja",
            "city": "Dhaka",
            "postCode": 1229,
            "subType": "SCHOOL",
            "uCode": "KUOX8155",
            "ST_AsText(location)": "POINT(90.41713178157806 23.829513859028346)"
        }
        .......
    ]
}      
```
