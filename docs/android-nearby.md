---
id: android-nearby
title: Nearby
---

## Nearby Library

Nearby Request Example Without Place Type

``` Java

NearbyPlaceAPI.builder(getApplicationContext())
                .setDistance(.5)
                .setLimit(10)
                .setLatLng(latitude,longitude)
                .build()
                .generateNearbyPlaceList(new NearbyPlaceListener() {
                    @Override
                    public void onPlaceListReceived(ArrayList<NearbyPlace> places) {
                        Toast.makeText(MainActivity.this, "Nearby Place First Address: "+places.get(0).getAddress(),                       Toast.LENGTH_SHORT).show();

                    }
                    @Override
                    public void onFailure(String message) {
                        Toast.makeText(MainActivity.this, "Error Message"+message, Toast.LENGTH_SHORT).show();
                    }
                });
                            
```

Nearby Request Example with Specific Place Type

``` Java

NearbyPlaceAPI.builder(getApplicationContext())
                            .setDistance(.5)
                            .setLimit(10)
                            .setLatLng(latitude,longitude)
                            .setType("Bank")
                            .build()
                            .generateNearbyPlaceListByType(new NearbyPlaceListener() {
                                @Override
                                public void onPlaceListReceived(ArrayList<NearbyPlace> places) {
                                    Toast.makeText(MainActivity.this, "Nearby Place First Address: "+places.get(0).getAddress()+" "+places.get(0).getCode(), Toast.LENGTH_SHORT).show();                        
                                }
                                @Override
                                public void onFailure(String message) {
                                    Toast.makeText(MainActivity.this, "Error: "+message, Toast.LENGTH_SHORT).show();
                                }
                            });
                            
```

