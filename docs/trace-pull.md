---
id: trace-pull
title: Users Current Position
---

## Method
```GET``` Users Current Position API

## URL
```
https://barikoi.xyz/v1/api/trace/company/users?api_key=API_KEY
```
Barikoi users current position api returns all the users information along with updated location. user_last_lat and user_last_lon represents users updated position. Active status represent whether this person is online or offline. Active status 1 means online and active status 0 menas offline.
## API PARAMS

| Parameter     | Value         | Action         |
| ------------- |:-------------:| -------------  |
| api_key       | {api key}     | Required       |


## Users Current Position API Request Example

``` Js                            
fetch('https://barikoi.xyz/v1/api/trace/company/users?api_key=API_KEY')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "info": {
        "company_name": "Barikoi Technologies Limited",
        "users": [
            {
                "user_id": 1626,
                "name": "Tanjed Ahmed",
                "user_last_lat": 23.7885151,
                "user_last_lon": 90.3722639,
                "position_updated_at": "2021-01-18 13:59:26",
                "active_status": 1
            },
            {
                "user_id": 2027,
                "name": "Shaon",
                "user_last_lat": 23.7393593,
                "user_last_lon": 90.335824,
                "position_updated_at": "2021-01-18 13:02:47",
                "active_status": 0
            },
            .......
        ]
    },
    "status": 200
}
```