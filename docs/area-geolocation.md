---
id: area-geolocation
title: Area API
---
## 
```GET``` Area API
```
http://barikoi.xyz/v2/api/search/area?api_key=API_KEY&latitude=23.863233589986915&longitude=90.41347324848176
```

Returns the area of given longitude and latitude.

## API Params

| Parameter     | Value              | Action        |
| ------------- |:-------------:     | ------------- |
|api_key        |  API_KEY           |  Required     | 
| longitude     | 90.41347324848176  |  Required     | 
| latitude      | 23.863233589986915 |  Required     |


## Area API Request Example

``` Js                                    
fetch('http://barikoi.xyz/v2/api/search/area?api_key=API_KEY&latitude=23.863233589986915&longitude=90.41347324848176')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "area": "dakkhinkhan",
    "status": 200
}
```
- [Get Complete Area List](https://docs.barikoi.com/docs/area-list) 

```For each request of Area API with all parameter 1 API call is counted.```