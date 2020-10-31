---
id: sub-district
title: Sub-District Api
---
##
```GET``` Sub-District API

```
http://barikoi.xyz/v1/api/API_KEY/sub_districts?q=Khilgaon
```

## API PARAMS

| Parameter     | Value         |
| ------------- |:-------------:|
| q             | Khilgaon      |

## Sub-District API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/sub_districts?q=Khilgaon')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "places": [
        {
            "id": 280,
            "name": "Khilgaon",
            "district": "Dhaka",
            "center": "{\"type\": \"Point\", \"coordinates\": [90.45477443959228, 23.759899924349806]}"
        }
    ],
    "status": 200
}
```

## Without Params

If q is not given then the api will return all sub-districts.

```
http://barikoi.xyz/v1/api/API_KEY/sub_districts
```

## Sub-District API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/sub_districts')
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
            "name": "Abhaynagar",
            "district": "Jessore",
            "center": "{\"type\": \"Point\", \"coordinates\": [89.42057859019934, 23.01760534615544]}"
        },
        {
            "id": 2,
            "name": "Adabor",
            "district": "Dhaka",
            "center": "{\"type\": \"Point\", \"coordinates\": [90.3533353289662, 23.770166931185912]}"
        },
        {
            "id": 3,
            "name": "Adamdighi",
            "district": "Bogra",
            "center": "{\"type\": \"Point\", \"coordinates\": [89.05945382380858, 24.79924085609132]}"
        },
        {
            "id": 4,
            "name": "Aditmari",
            "district": "Lalmonirhat",
            "center": "{\"type\": \"Point\", \"coordinates\": [89.36945393829866, 25.94501576520455]}"
        },
        {
            "id": 5,
            "name": "Agailjhara",
            "district": "Barisal",
            "center": "{\"type\": \"Point\", \"coordinates\": [90.14076039190546, 22.96784467745809]}"
        },
        {
            "id": 6,
            "name": "Ajmiriganj",
            "district": "Habiganj",
            "center": "{\"type\": \"Point\", \"coordinates\": [91.2841877763222, 24.55331228982608]}"
        }
        .......
    ],
    "status": 200
}
```
For each request of Sub-District API with all parameter 0 is counted.