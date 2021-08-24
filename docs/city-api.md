---
id: city-api
title: City Api
---
##
```GET``` City API

```
http://barikoi.xyz/v1/api/API_KEY/cities?q=Dhaka
```

## API PARAMS

| Parameter     | Value         |
| ------------- |:-------------:|
| q             | Dhaka         |

## City API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/cities?q=Dhaka')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "places": [
        {
            "name": "Dhaka",
            "areas": [
                {
                    "name": "Moghbazar"
                },
                {
                    "name": "Gendaria"
                },
                {
                    "name": "Sher E Bangla Nagar"
                },
                {
                    "name": "Tejgaon"
                },
                {
                    "name": "Mohakhali"
                },
                {
                    "name": "Ramna"
                }
               .......
            ]
        }
    ],
    "status": 200
}
```

## Without Params

If q is not given then the api will return all cities.

```
http://barikoi.xyz/v1/api/API_KEY/cities
```

## City API Request Example

``` Js                            
fetch('http://barikoi.xyz/v1/api/API_KEY/cities')
    .then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response))
```

## Example Response

```
{
    "places": [
        {
            "name": "Rajshahi",
            "areas": []
        },
        {
            "name": "Khulna",
            "areas": []
        },
        {
            "name": "Barisal",
            "areas": []
        },
        {
            "name": "Dhaka",
            "areas": [
                {
                    "name": "Moghbazar"
                },
                {
                    "name": "Gendaria"
                },
                {
                    "name": "Sher E Bangla Nagar"
                },
                {
                    "name": "Tejgaon"
                },
                {
                    "name": "Mohakhali"
                },
                {
                    "name": "Ramna"
                },
                {
                    "name": "Sadarghat"
                },
                {
                    "name": "Banani"
                },
                {
                    "name": "Lalmatia"
                },
                {
                    "name": "Dhanmondi"
                },
                {
                    "name": "Gulshan 2"
                },
                {
                    "name": "Nikunja"
                }
                .......
            ]
        },
        {
            "name": "Chittagong",
            "areas": []
        },
        {
            "name": "Sylhet",
            "areas": []
        }
    ],
    "status": 200
}
```
```For each request of City API with all parameter 0 API call is counted.```