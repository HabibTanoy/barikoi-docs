---
id: union-api
title: Union Api
---
##
```GET``` Union API

```
http://barikoi.xyz/v1/api/API_KEY/unions?q=Abaipur
```

## API PARAMS

| Parameter     | Value         |
| ------------- |:-------------:|
| q             | Abaipur       |

## Union API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/unions?q=Abaipur')
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
            "name": "Abaipur",
            "sub_district": "Shailkupa",
            "center": "{\"type\": \"Point\", \"coordinates\": [89.32057699103409, 23.59762103167178]}"
        }
    ],
    "status": 200
}
```

## Without Params

If q is not given then the api will return all unions.

```
http://barikoi.xyz/v1/api/API_KEY/unions
```

## Union API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/unions')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "places": [
        {
            "id": 1203,
            "name": "Chikashi",
            "sub_district": "Dhunat",
            "center": "{\"type\": \"Point\", \"coordinates\": [89.56380109324998, 24.75404197173319]}"
        },
        {
            "id": 1204,
            "name": "Chikdair",
            "sub_district": "Raozan",
            "center": "{\"type\": \"Point\", \"coordinates\": [91.8800217668128, 22.54372849367624]}"
        },
        {
            "id": 1205,
            "name": "Chiknagul",
            "sub_district": "Jaintiapur",
            "center": "{\"type\": \"Point\", \"coordinates\": [92.00116400240036, 24.956171818679373]}"
        },
        {
            "id": 1206,
            "name": "Chiknikandi",
            "sub_district": "Galachipa",
            "center": "{\"type\": \"Point\", \"coordinates\": [90.45560794068692, 22.243360479923517]}"
        }
        .......
    ],
    "status": 200
}
```
For each request of Union API with all parameter 0 is counted.