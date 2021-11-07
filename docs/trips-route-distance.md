---
id: trips-route-distance
title: Trips Route and Distance
---
##
```GET``` Trips Route and Distance

```
https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=1
```

This api provides a user’s all the trips (in linestring json format) along with each trip’s distance(unit in meter) of all the trips between given the start time and end time.
<br>

start_time ,end_time ,user_id ,api_key ,path are required to make this get request.
<br>

To get all the users trips, put user_id=ALL in api parameter.
To determine api’s response this api takes a parameter ‘path’ , it’s value can be either true or false. If true is set to path parameter api will return all the trips (in linestring json format) along with each trip's distance(unit in meter) and if false is set to path parameter api will return total distance(unit in meter) of all the trips between given the start time and end time.

## API PARAMS

| Parameter          | Value                 | Action        |
| -------------      |:---------------------:| ------------- |
|start_time          | 2021-04-03 16:00:07   |  Required     |
| end_time           | 2021-04-10 16:00:07   |  Required     |
| user_id            | 1                     |  Required     |
| api_key            | {api_key}             |  Required     |
| page               |1                      |               |

## User Route and Distance API Request Example

``` Js
fetch('https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=1')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "trips": {
        "current_page": 1,
        "data": [
            {
                "trip_id": 174,
                "user_id": 12,
                "user_name": "Sadman",
                "tag": "test",
                "state": 1,
                "start_time": "2021-06-24 13:01:03",
                "end_time": "2021-06-24 13:09:39",
                "updated_at": "2021-06-24T07:12:21.000000Z",
                "distance": "71.39",
                "unit": "METRE",
                "path": "{\"type\": \"LineString\", \"coordinates\": [[90.3938375, 23.8209764], [90.3936974831333, 23.82160796065862]]}"
            },
            {
                "trip_id": 142,
                "user_id": 12,
                "user_name": "Sadman",
                "tag": "test",
                "state": 1,
                "start_time": "2021-06-20 07:07:45",
                "end_time": "2021-06-20 07:18:03",
                "updated_at": "2021-06-20T01:20:43.000000Z",
                "distance": "4387.19",
                "unit": "METRE",
                "path": "{\"type\": \"LineString\", \"coordinates\": [[91.7379936, 24.3073152], [91.73830835063664, 24.306753537669863], [91.7388118, 24.306109], [91.7402393, 24.3050475], [91.7414137, 24.3041711], [91.7426033, 24.3032908], [91.7438309, 24.3023709], [91.7457389, 24.3020333], [91.7473725, 24.3018929], [91.7490012, 24.3017905], [91.7508179, 24.3016382], [91.7524164, 24.3015135], [91.7538966, 24.3013988], [91.7553427, 24.3004323], [91.7567693, 24.2998414], [91.7587875, 24.2997241], [91.7603416, 24.2994922], [91.7618148, 24.2992586], [91.7633374, 24.3001659], [91.76402151325492, 24.299985300156415], [91.7639683, 24.2987281], [91.76408605017652, 24.29803220002326], [91.764409, 24.2972946], [91.7652513005201, 24.2971040629604], [91.7658142, 24.2965578], [91.76615970037692, 24.295882462592303], [91.7664894, 24.2951563], [91.76645841635938, 24.29448951670615], [91.7661474, 24.293564], [91.7667657, 24.2922792], [91.7668422, 24.2909004], [91.7674239380143, 24.290123775494667], [91.7683185, 24.2900305], [91.76919052770344, 24.289638500102782]]}"
            },
            {
                "trip_id": 120,
                "user_id": 12,
                "user_name": "Sadman",
                "tag": "test",
                "state": 1,
                "start_time": "2021-06-17 11:34:03",
                "end_time": "2021-06-17 12:05:46",
                "updated_at": "2021-06-17T06:08:22.000000Z",
                "distance": "5862.55",
                "unit": "METRE",
                "path": "{\"type\": \"LineString\", \"coordinates\": [[90.38806, 23.8703527], [90.38807115999742, 23.87037084000041], [90.3937391, 23.82128], [90.39369840000568, 23.821122700000657], [90.3937393, 23.8229877], [90.3936644750888, 23.822825175021784], [90.393685, 23.8216361], [90.39382278853144, 23.82155294266275]]}"
            },
            ...........
        ],
        "first_page_url": "https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=1",
        "from": 1,
        "last_page": 2,
        "last_page_url": "https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=2",
        "links": [
            {
                "url": null,
                "label": "&laquo; Previous",
                "active": false
            },
            {
                "url": "https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=1",
                "label": 1,
                "active": true
            },
            {
                "url": "https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=2",
                "label": 2,
                "active": false
            },
            {
                "url": "https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=2",
                "label": "Next &raquo;",
                "active": false
            }
        ],
        "next_page_url": "https://barikoi.xyz/v1/api/trace/user/trips/paginated?start_time=2021-06-01%2000%3A07%3A20&end_time=2021-06-25%2015%3A25%3A59&user_id=12&api_key={api_key}&page=2",
        "path": "https://barikoi.xyz/v1/api/trace/user/trips/paginated",
        "per_page": 20,
        "prev_page_url": null,
        "to": 20,
        "total": 33
    },
    "status": 200
}
```  

