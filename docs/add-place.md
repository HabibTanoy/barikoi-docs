---
id: add-place
title: Add Place
---
##
```POST```  Add Place

```
https://barikoi.xyz/v1/API_KEY/add/place
```

## API PARAMS

| Parameter            | Value                         | Action        |
| -------------        |:-------------:                | ------------- | 
| latitude             | 23.85498547028746             |  Required     |
| longitude            | 90.35691127743058             |  Required     | 
| city                 | Dhaka                         |  Required     |
| area                 |  Uttara                       |  Required     |
| postCode             | 1216                          |  Required     |
| pType                | Office                        |  Required     | 
| subType              | Head Office                   |  Required     |
| business_name        |  Barikoi Office (Barikoi.com) |               |
| place_name           | Karnaphully Building          |               |
| holding_number       | 23423                         |               | 
| road_name_number     | 2/a                           |               |
| super_sub_area       |    RAJUK Apartment Project    |               |
| sub_area             | Sector 18                     |               |



## Example Response

```
{
    "message": "place added successfully",
    "status": 200,
    "uCode": "MKQJ3341"
}

```
```For each request of Add Place with all parameter 1 API call is counted.```