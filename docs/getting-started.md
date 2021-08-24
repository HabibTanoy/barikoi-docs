---
id: intro
title: Barikoi Places API
---

## Introduction

Welcome to Barikoi API. Thank you for checking a Bangladeshi location data provider API. Our API Helps you to find address, geocode and reverse geocode place and city corporation information in Dhaka in our local context.

## Overview

The currently listed Places API's are for autocomplete, post office autocomplete, geocoding, reverse geocoding, nearby, distance & rupantor geocoder. And City Corporation API's are Ward by Geolocation, Zone by Geolocation, Ward and Zone by Geolocation, City Corporation by Geolocation.

## Authentication
API Key is needed to use all the API's. [Sign up](https://developer.barikoi.com/register). in Barikoi to get the API KEY.

## Error Codes

#### API Limit Exceeded
```json
{
    "message": "API LIMIT EXCEEDED",
    "status": 429
}
```

#### Invalid or No Regsitered Key
```json
{
    "message": "Invalid or No Registered Key",
    "status": 401
}
```

#### Missing Parameter

```json
{
    "message": "Parameter missing",
    "status": 400
}
```

#### Payment Exception

```json
{
    "message": "payment exception",
    "status": 402
}
```

#### Rate Limit
60 Requests per minute

#### API Usage Clarification
A single API request and a single API call are not always the same. A single API request to the server might call multiple APIs. An API might depend on other internal APIs to deliver the desired response. The number of call depends on the number of parameters of a request and the number of internal API calls needed to make to provide the desired response.
For instance, A single request to Rupantor API results in two API calls since Rupantor API uses geocode API to operate. Routing API follows the same formalities as Rupantor. 

For any query or tech support please mail at support@barikoi.com



