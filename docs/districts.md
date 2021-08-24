---
id: district
title: District Api
---
##
```GET``` District API

```
http://barikoi.xyz/v1/api/API_KEY/districts?q=Chittagong
```

## API PARAMS

| Parameter     | Value         |
| ------------- |:-------------:|
| q             | Chittagong    |

## District API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/districts?q=Chittagong')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "places": [
        {
            "id": 9,
            "name": "Chittagong",
            "center": "{\"type\": \"Point\", \"coordinates\": [91.83436892134064, 22.44326446730346]}"
        }
    ],
    "status": 200
}
```

## Without Params

If q is not given then the api will return all districts.

```
http://barikoi.xyz/v1/api/API_KEY/districts
```

## District API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/districts')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "places": [
        {
            "id": 1,
            "name": "Bagerhat",
            "center": "{\"type\": \"Point\", \"coordinates\": [89.73956431663846, 22.36977996795243]}"
        },
        {
            "id": 2,
            "name": "Bandarban",
            "center": "{\"type\": \"Point\", \"coordinates\": [92.36382543114016, 21.80711701661792]}"
        },
        {
            "id": 3,
            "name": "Barguna",
            "center": "{\"type\": \"Point\", \"coordinates\": [90.1204803599124, 22.14112658246039]}"
        },
        {
            "id": 4,
            "name": "Barisal",
            "center": "{\"type\": \"Point\", \"coordinates\": [90.34167233806411, 22.811441437980033]}"
        },
        {
            "id": 5,
            "name": "Bhola",
            "center": "{\"type\": \"Point\", \"coordinates\": [90.73334082882695, 22.335697321448272]}"
        },
        {
            "id": 6,
            "name": "Bogra",
            "center": "{\"type\": \"Point\", \"coordinates\": [89.37879178145258, 24.824458085035953]}"
        }
        .......
    ],
    "status": 200
}
```
```For each request of District API with all parameter 0 API call is counted.```