---
id: android-rev-geocoding
title: Reverse Geocoding
---
## Reverse Geocoding Library

``` Java

ReverseGeoAPI.builder(getApplicationContext())
                        .setLatLng(latitude,longitude)
                        .build()
                        .getAddress(new ReverseGeoAPIListener() {
                            @Override
                            public void reversedAddress(ReverseGeoPlace place) {
                                Toast.makeText(MainActivity.this, ""+place.getAddress(), Toast.LENGTH_SHORT).show();

                            }

                            @Override
                            public void onFailure(String message) {
                                Toast.makeText(MainActivity.this, "Error Message"+message, Toast.LENGTH_SHORT).show();
                            }
                        });
```


