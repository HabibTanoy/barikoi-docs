---
id: rupantor-geocoder
title: Rupantor Geocoder
---
##
```POST``` Rupantor Geocoder
```
https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode
```

Rupantor Geocoder API for Developers. It formats the given address and searches for the address and gives a

 status if the address is complete of not.

Rupantor Geocoder only supports FormData. So use FormData object to send your data.

Rupantor also has a Address Matching API. Details can be found [here.](https://barikoi.com/documentation#rupantor-addr-match)

Rupantor Geocoder needs Geocode API to fucntion properly. One Rupantor Geocoder request requires two 

Geocode API requests.

## FormData Key and Value

| Parameter     | Value                                                              | Action     |
| ------------- |:-------------:                                                     | ---------- | 
| q             | ave#3 barikoi office house no# 192 rd# 02 mirpur dohs section 12   |  Required  |
| thana         | yes                                                                |            | 
| district      | yes                                                                |            |
| bangla        | yes                                                                |            |

## Rupantor Geocoder API Request Example

``` Js

let formData = new FormData();
let url = 'https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode'

let address = 'ave#3 barikoi office house no# 192 rd# 02 mirpur dohs section 12'

formData.append('q', address);
formData.append('thana', 'yes');
formData.append('district', 'yes');
formData.append('bangla', 'yes');

fetch(url, {
        method: 'post',
        body: formData
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "given_address": "ave#3 barikoi office house no#192 rd#02 mirpur dohs section 12",
    "fixed_address": "barikoi office, house 192, avenue 3, road 2, mirpur dohs, mirpur",
    "bangla_address": "বাড়িকই অফিস, হাউস ১৯২, এভিনিউ ৩, রোড ২, মিরপুর ডিওএইচএস, মিরপুর",
    "address_status": "complete",
    "geocoded_address": {
        "Address": "House 192, Road 2, Mirpur DOHS, Mirpur, Dhaka",
        "area": "Mirpur",
        "city": "Dhaka",
        "district": "Dhaka",
        "latitude": "23.833979263544503",
        "longitude": "90.36733254790306",
        "pType": "Residential",
        "postCode": 1216,
        "thana": "Pallabi",
        "uCode": "CDOG6017"
    },
    "confidence_score_percentage": 95,
    "status": 200
}
```
For each request of Rupantor Geocoder with all parameter 2 is counted.

```address_status denotes whether a given/input address is complete or not based on area.```

```confidence_score_percentage determines the accuracy level of the geocoded address```

```A complete address might get the maximum confidence_score_percentage.```

```confidence_score_percentage > 95 --- = Exact or be the closest one```

```confidence_score_percentage >= 70 --- = Within the the specific area, subarea , Can be used```

```for zoning confidence_score_percentage < 70 --- = Not reliable```

Rupantor Geocoder returns thana and district only if thana and district are added to request body with the value

'yes'.

Rupantor Geocoder returns ```null``` geocoded_address if no geocoded address is found.

##
```POST``` Rupantor Address Match

```
https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode
```

Rupantor Address Matcher API matches two different given address and returns match percantage and match

status.

## FormData Key and Value

| Parameter     | Value                                         |
| ------------- |:-------------:                                | 
| q             | হাউস ১৮, রোড ৫, ব্লক জি, সেকশন ২ মিরপুর             |
| q2            | house 18, road 5, block G, section 2, mirpur  | 
| match         | yes                                           |

## Rupantor Address Matcher API Request Example

``` Js

let formData = new FormData();
let url = 'https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode'

let address = 'ave#3 barikoi office house no# 192 rd# 02 mirpur dohs section 12'

formData.append('q', 'হাউস ১৮, রোড ৫,  ব্লক জি, সেকশন ২ মিরপুর');
formData.append('q2', 'house 18, road 5, block G, section 2, mirpur');
formData.append('match', 'yes');

fetch(url, {
        method: 'post',
        body: formData
    })
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "match": {
        "address 1": "হাউস ১৮, রোড ৫,  ব্লক জি, সেকশন ২ মিরপুর",
        "address 2": "house 18, road 5, block G, section 2, mirpur",
        "match percentage": "100%",
        "match status": "exact"
    },
    "status": 200
}

// match_status defination
// match percentage >= 97-100 = exact
// match percentage >75-96 = approximate
// match percentage <75 = not matched
```
For each request of Rupantor Address Match with all parameter 2 is counted.