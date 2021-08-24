---
id: autocomplete
title: Autocomplete
---
## 
```GET``` Autocomplete API

## URL
```
https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=shopno
```
Barikoi Autocomplete return's a place's id, longitude, latitude, address, city, area, postCode, pType & uCode

## API PARAMS

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- | 
| q             | shopno        |  Required     |


## API Request Example

```Js
fetch("https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=shopno")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response
```
{
    "places": [
        {
            "id": 19584,
            "longitude": "90.39408891592521",
            "latitude": "23.86523106661817",
            "address": "Shopno Chhowa Ladies Tailors, House 14, Road 7/A, Sector 3",
            "city": "Dhaka",
            "area": "Uttara",
            "postCode": 1230,
            "pType": "Shop",
            "uCode": "AUTH9999"
        },
        {
            "id": 253646,
            "longitude": "90.44168103486298",
            "latitude": "23.759082330645228",
            "address": "Shopno Beauty Parlour, House 8, Main Road, Block L",
            "city": "Dhaka",
            "area": "Banasree",
            "postCode": 1219,
            "pType": "Commercial",
            "uCode": "DQPB2984"
        },
        {
            "id": 180963,
            "longitude": "90.39067279547453",
            "latitude": "23.797957610140788",
            "address": "Shopno Beauty Parlour, Navy Colony, Shagorika Road, Section 14",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Commercial",
            "uCode": "KJWY9859"
        },
        {
            "id": 223169,
            "longitude": "90.41794013231993",
            "latitude": "23.814557964883512",
            "address": "Shopno Beauty Parlour, House ka-141, Joar Shahara Bazar, Joar Shahara",
            "city": "Dhaka",
            "area": "Kuril",
            "postCode": 1229,
            "pType": "Commercial",
            "uCode": "MFWR2184"
        },
        ...................
    ],
    "status": 200
}
```

```For each request of Autocomplete API with all parameter 1 API call is counted.```


## Autocomplete API With City Filter

```GET``` Autocomplete API With City Filter

## URL
```
https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=barikoi&city=dhaka
```
Autocomplete API With City Filter returns a place's id, longitude, latitude, address, city, area, postCode, pType & uCode within the city given.

## API PARAMS

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- | 
| q             | barikoi       |  Required     |
|city           | dhaka         |  Required     |


<!-- Here, Latitude and Longitude and Scale are optional parameters.When Latitude and Longitude are provided in the request parameter then the search result is returned based on the provided longitude latitude.When Scale is provided system will search inside the particular area (in Kilometer) radius.  -->

## API Request Example

```Js
fetch("https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=barikoi&city=dhaka")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response
```
{
    "places": [
        {
            "id": 3354,
            "longitude": "90.3938010872331",
            "latitude": "23.821600277500405",
            "address": "Barikoi HQ (Barikoi.com), Wasi Tower, House 572/K, Matikata Main Road, Matikata",
            "city": "Dhaka",
            "area": "Dhaka Cantonment",
            "postCode": 1206,
            "pType": "Office",
            "uCode": "BKOI2017"
        },
        {
            "id": 157699,
            "longitude": "90.3720321133733",
            "latitude": "23.803072268264806",
            "address": "Barik Furniture, House 306, Senpara Parbata",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Shop",
            "uCode": "CHBZ2341"
        },
        {
            "id": 610995,
            "longitude": "90.40491189062823",
            "latitude": "23.745247918419942",
            "address": "Barkoti, Ramna Shopping Complex, House 25, Old Elephant Road",
            "city": "Dhaka",
            "area": "Ramna",
            "postCode": 1217,
            "pType": "Office",
            "uCode": "GITL2453"
        },
        {
            "id": 204772,
            "longitude": "90.38808513432741",
            "latitude": "23.81265315918446",
            "address": "Barik Mridha, House 18/4/A, West Bhashantek, Bhashantek",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1206,
            "pType": "Residential",
            "uCode": "JBLV4390"
        },
        {
            "id": 423908,
            "longitude": "90.36891471594572",
            "latitude": "23.82094852183619",
            "address": "Barik Brothers, House 88, Kalshi Road, Block B, Section 12",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Shop",
            "uCode": "WNRY2445"
        },
      ...............
    ],
    "status": 200
}
```
<!-- - [Get Complete City List](https://docs.barikoi.com/docs/city-list) -->

```For each request of Autocomplete API With City Filter with all parameter 1 API call is counted.```




## Post Office Autocomplete API

```GET``` Post Ofiice Autocomplete API

```
https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Mirpur&post_office=true
```
Barikoi Post Office Autocomplete API will return only post offices holding place's id, longitude, latitude, address, city, area, postCode, pType & uCode in response.

To get Post Office Autocomplete API just add post_office param to request body with the value ```true```

## API Params

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- |
| q             | Mirpur        |  Required     |
| post_office   | true          |  Required     | 

## Post Office Autocomplete API Request Example

``` Js
fetch("https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Mirpur&post_office=true")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```
## Example Response
```
{
    "places": [
        {
            "id": 4,
            "latitude": "23.811978035351842",
            "longitude": "90.34750800579786",
            "address": "Chiriyakhana Post Office, Zoo Road, Section 1",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Government",
            "uCode": "WEST4687"
        },
        {
            "id": 5,
            "latitude": "23.803282712061726",
            "longitude": "90.36128953099252",
            "address": "Mirpur Post Office, Main Road, Section 2",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Government",
            "uCode": "BAND7192"
        },
        {
            "id": 6,
            "latitude": "23.820675852230316",
            "longitude": "90.3647304698825",
            "address": "Pallabi Post Office, Begum Rokeya Sarani, Purobi",
            "city": "Dhaka",
            "area": "Mirpur",
            "postCode": 1216,
            "pType": "Government",
            "uCode": "ALSO4104"
        }
    ],
    "status": 200
}       
```
```For each request of Post Office Autocomplete API with all parameter 2 API call is counted.```

## Industrial Autocomplete API

```GET``` Industrial Autocomplete API

```
https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Nabisco&industrial=true
```
Barikoi Industrial Autocomplete API will return only industrial places holding place's id, longitude, latitude, address, city, area, postCode, pType & uCode in response.

## API Params

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- |
| q             | Nabisco       |  Required     |
| industrial    | true          |  Required     | 

## Industrial Autocomplete API Request Example

``` Js
fetch("https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=Nabisco&industrial=true")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```
## Example Response
```
{
    "places": [
        {
            "id": 778,
            "longitude": "90.4012799263",
            "latitude": "23.768977904449",
            "address": "House 77, Shahid Taj Uddin Ahmed Sharani",
            "city": "Dhaka",
            "area": "Tejgaon",
            "postCode": 1208,
            "pType": "Industry",
            "uCode": "MAPB0183"
        },
        {
            "id": 2,
            "longitude": "90.40287181735",
            "latitude": "23.769046635996",
            "address": "House 77, Tejgaon Industrial Area",
            "city": "Dhaka",
            "area": "Tejgaon",
            "postCode": 1208,
            "pType": "Industry",
            "uCode": "EAST9031"
        },
        {
            "id": 3,
            "longitude": "90.40298178792",
            "latitude": "23.768945072849",
            "address": "House 77, Tejgaon Industrial Area",
            "city": "Dhaka",
            "area": "Tejgaon",
            "postCode": 1208,
            "pType": "Industry",
            "uCode": "AIMS0122"
        }
    ],
    "status": 200
}
```
```For each request of Industrial Autocomplete API with all parameter 1 API call is counted.```

## Bangla Autocomplete API

```GET``` Bangla Autocomplete API

```
https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=barikoi&bangla=true
```

Barikoi Bangla Autocomplete API will return places holding place's id, longitude, latitude, address, address_bn, city, city_bn, area, area_bn, postCode, pType & uCode in response. Return bangla address and area along with others.

## API Params

| Parameter     | Value         | Action        |
| ------------- |:-------------:| ------------- |
| q             | barikoi       |  Required     |
| bangla        | true          |  Required     | 

## Bangla Autocomplete API Request Example

``` Js
fetch("https://barikoi.xyz/v1/api/search/autocomplete/API_KEY/place?q=barikoi&bangla=true")
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response
```
{
    "places": [
        {
            "id": 3354,
            "longitude": "90.3938010872331",
            "latitude": "23.821600277500405",
            "address": "Barikoi HQ (Barikoi.com), Wasi Tower, House 572/K, Matikata Main Road, Matikata",
            "address_bn": "বাড়িকই হক (বারিকই.কম), ওয়াসি টাওয়ার, হাউস ৫৭২/কে, মাটিকাটা মেইন রোড, মাটিকাটা, ঢাকা সেনানিবাস",
            "city": "Dhaka",
            "city_bn": "ঢাকা",
            "area": "Dhaka Cantonment",
            "area_bn": "ঢাকা সেনানিবাস",
            "postCode": 1206,
            "pType": "Office",
            "uCode": "BKOI2017"
        },
        {
            "id": 157699,
            "longitude": "90.3720321133733",
            "latitude": "23.803072268264806",
            "address": "Barik Furniture, House 306, Senpara Parbata",
            "address_bn": "বারিক ফার্নিচার, হাউস ৩০৬, সেনপাড়া পর্বটা, মিরপুর",
            "city": "Dhaka",
            "city_bn": "ঢাকা",
            "area": "Mirpur",
            "area_bn": "মিরপুর",
            "postCode": 1216,
            "pType": "Shop",
            "uCode": "CHBZ2341"
        },
        {
            "id": 610995,
            "longitude": "90.40491189062823",
            "latitude": "23.745247918419942",
            "address": "Barkoti, Ramna Shopping Complex, House 25, Old Elephant Road",
            "address_bn": "বারকোটি, রমনা শপিং কমপ্লেক্স, হাউস ২৫, ওল্ড এলিফ্যান্ট রোড, রমনা",
            "city": "Dhaka",
            "city_bn": "ঢাকা",
            "area": "Ramna",
            "area_bn": "রমনা",
            "postCode": 1217,
            "pType": "Office",
            "uCode": "GITL2453"
        },
        {
            "id": 204772,
            "longitude": "90.38808513432741",
            "latitude": "23.81265315918446",
            "address": "Barik Mridha, House 18/4/A, West Bhashantek, Bhashantek",
            "address_bn": "বারিক মৃধা, হাউস ১৮/৪/এ, পশ্চিম ভাষানটেক, ভাষানটেক, মিরপুর",
            "city": "Dhaka",
            "city_bn": "ঢাকা",
            "area": "Mirpur",
            "area_bn": "মিরপুর",
            "postCode": 1206,
            "pType": "Residential",
            "uCode": "JBLV4390"
        },
        {
            "id": 423908,
            "longitude": "90.36891471594572",
            "latitude": "23.82094852183619",
            "address": "Barik Brothers, House 88, Kalshi Road, Block B, Section 12",
            "address_bn": "বারিক ব্রাদার্স, হাউস ৮৮, কালশী রোড, ব্লক বি, সেকশন ১২, মিরপুর",
            "city": "Dhaka",
            "city_bn": "ঢাকা",
            "area": "Mirpur",
            "area_bn": "মিরপুর",
            "postCode": 1216,
            "pType": "Shop",
            "uCode": "WNRY2445"
        },
        {
            "id": 550975,
            "longitude": "91.00092316",
            "latitude": "23.81542015",
            "address": "Barikhola Primary School",
            "address_bn": "বাড়িখোলা প্রাইমারি স্কুল, নবীনগর",
            "city": "Brahamanbaria",
            "city_bn": "ব্রাহ্মণবাড়িয়া",
            "area": "Nabinagar",
            "area_bn": "নবীনগর",
            "postCode": 3410,
            "pType": "Education",
            "uCode": "GPOW3699"
        },
        {
            "id": 432676,
            "longitude": "90.42420208454132",
            "latitude": "23.793565523547933",
            "address": "Barik Brothers, Pragati Sarani Bir Uttam Rafiqul Islam Avenue",
            "address_bn": "বারিক ব্রাদার্স, প্রগতি সরণী বীর উত্তম রফিকুল ইসলাম এভিনিউ, শাহজাদপুর",
            "city": "Dhaka",
            "city_bn": "ঢাকা",
            "area": "Shahjadpur",
            "area_bn": "শাহজাদপুর",
            "postCode": 1212,
            "pType": "Shop",
            "uCode": "NHNA6587"
        },
        {
            "id": 343820,
            "longitude": "90.41435301303864",
            "latitude": "23.782578679158014",
            "address": "Karikor Cynosure, House 69, Road 27, Gulshan 1",
            "address_bn": "কারিকর ক্যানসারে, হাউস ৬৯, রোড ২৭, গুলশান ১, গুলশান",
            "city": "Dhaka",
            "city_bn": "ঢাকা",
            "area": "Gulshan",
            "area_bn": "গুলশান",
            "postCode": 1212,
            "pType": "Food",
            "uCode": "GZNI9253"
        },
        ...............
    ],
    "status": 200
}
```
```For each request of Bangla Autocomplete API with all parameter 1 API call is counted.```