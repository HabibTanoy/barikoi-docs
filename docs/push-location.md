---
id: push-location
title: Push Location Data
---
## Method
```POST``` Push Location API

## URL
```
http://barikoi.xyz/v1/api/trace/position/push
```
Barikoi trace push api will be used to sent user's location data to the system.api_key, user_id, latitude, longitude are required to make this post request. Optional parameters altitude, speed, bearing, gpx_time can be an addition to it.
## API PARAMS

| Parameter     | Value         | Action         |
| ------------- |:-------------:| -------------  |
| api_key       | {api key}     | Required       |
| user_id       | 1626          | Required       |
| latitude      | 23.121221     | Required       |
| longitude     | 90.234134     | Required       |
| altitude      | -23.54536     |                |
| speed         | 0.2532        |        |
| bearing       | 4.2345        |        |
| gpx_time      | 2020-01-21 12:10:02.23         |                |





## Example Response

```
{
    "user_id": 1626,
    "message": "Inserted",
    "status": 200
}
```