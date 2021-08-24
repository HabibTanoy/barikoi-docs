---
id: rupantor-geocoder
title: Rupantor Geocoder
---
##
```POST``` Rupantor Geocoder
```
https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode
```

Rupantor Geocoder API for Developers. It formats the given address and searches for the address and gives a status if the address is complete or not.
Rupantor Geocoder only supports FormData. So use FormData object to send your data.
Rupantor Geocoder needs Geocode API to fucntion properly. One Rupantor Geocoder request requires two 
Geocode API requests.
<!-- Rupantor also has a Address Matching API. Details can be found [here.](https://barikoi.com/documentation#rupantor-addr-match) -->

## FormData Key and Value

| Parameter     | Value                                                              | Action     |
| ------------- |:-------------:                                                     | ---------- | 
| q             | matikata rd basa 572/k barikoi                                     |  Required  |
| thana         | yes                                                                |            | 
| district      | yes                                                                |            |
| bangla        | yes                                                                |            |

## Rupantor Geocoder API Request Example

``` Js

let formData = new FormData();
let url = 'https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode'

let address = 'matikata rd basa 572/k barikoi'

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
    "given_address": "matikata rd basa 572/k barikoi",
    "fixed_address": "house 572/k, matikata road, matikata, dhaka cantonment",
    "address_status": "complete",
    "geocoded_address": {
        "Address": "Barikoi HQ (Barikoi.com), Wasi Tower, House 572/K, Matikata Main Road, Matikata, Dhaka Cantonment, Dhaka, Dhaka",
        "area": "Dhaka Cantonment",
        "city": "Dhaka",
        "latitude": "23.8216002775",
        "longitude": "90.393801087233",
        "pType": "Office",
        "postCode": "1206",
        "uCode": "BKOI2017",
        "thana": "Bhashantek"
    },
    "confidence_score_percentage": 98,
    "status": 200
}
```
```For each request of Rupantor Geocoder with basic parameter 2 API call is counted.```

```Address_status denotes whether a given/input address is complete or not based on area.```

```Confidence_score_percentage determines the accuracy level of the geocoded address```

```A complete address might get the maximum confidence_score_percentage.```

```Confidence_score_percentage > 95 --- = Exact or be the closest one```

```Confidence_score_percentage >= 70 --- = Within the the specific area, subarea , Can be used.```

```For zoning confidence_score_percentage < 70 --- = Not reliable```

Rupantor Geocoder returns thana and district only if thana and district are added to request body with the value

'yes'.

Rupantor Geocoder returns ```null``` geocoded_address if no geocoded address is found.

## Rupantor Zone API
##
```POST```  Rupantor Address Zone

```
https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode
```
Rupantor zone API parsed the district, the sub district/thana and the union name from the given address. And it search and provides geocoded the address.

## FormData Key and Value

| Parameter     | Value                                         |
| ------------- |:-------------:                                | 
| q             | hathajari fotehpur rudro polli chottogram     |
| zone          | true                                          |

## Rupantor Zone API Request Example

``` Js

let formData = new FormData();
let url = 'https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode'

let address = 'hathajari fotehpur rudro polli chottogram'

formData.append('q', 'hathajari fotehpur rudro polli chottogram');
formData.append('zone', 'true');

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
    "confidence_score": {
        "district_score": 100,
        "score_percentage": 100,
        "thana_score": 100,
        "union_score": 100
    },
    "geocoded": {
        "Address": "Fatehpur Rudra Polli, Hathazari,  Chittagong",
        "area": "Hathazari",
        "city": " Chittagong",
        "district": "Chittagong",
        "latitude": "22.468935062288",
        "longitude": "91.806349754333",
        "pType": "Admin",
        "postCode": 4335,
        "thana": "Hathazari",
        "uCode": "PGXE1700",
        "union": "Fatehpur"
    },
    "input_address": "hathajari fotehpur rudro polli chottogram",
    "parsed": {
        "district": "Chittagong",
        "sub_district": "Hathazari",
        "union": "Fatehpur"
    }
}
```
Parsed denotes the address components found from the given address confidence_score determines the accuracy level of the geocoded address.

- district_score  = 100 or 0 denotes the desired district found or not
- thana_score  = 100 or 0 denotes the desired thana found or not
- union_score  = 100 or 0 denotes the desired union found or not
- score_percentage = 100, 66, 33, 0 denotes the percentage score of the above three

<!-- When you are a delivery company and you have multiple hubs or delivery points in bangladesh and you want to find the hubs or delivery points from the user input address. Then contact with barikoi. Barikoi can help you to meet your requirements. -->


For each request of Rupantor Zone API with basic parameter 3 API call is counted.


## Rupantor Address Match
##
```POST``` Rupantor Address Match

```
https://barikoi.xyz/v1/api/search/API_KEY/rupantor/geocode
```

Rupantor Address Matcher API matches two different given address and returns match percantage and match status.

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
        "address 1": "হাউস ১৮, রোড ৫, ব্লক জি, সেকশন ২ মিরপুর",
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
```For each request of Rupantor Address Match with basic parameter 2 API call is counted.```

Note: Any additional parameters with value ```true``` will be counted.