---
id: android-geocoding
title: Geocoding
---

## Geocoding Library Example 

``` Java

GeoCodeAPI.builder(getApplicationContext())
                    .idOrCode(idOrCode)
                    .build()
                    .generateList(new PlaceGeoCodeListener() {
                        @Override
                        public void onGeoCodePlace(GeoCodePlace place) {
                            Toast.makeText(MainActivity.this, ""+place.getAddress(), Toast.LENGTH_SHORT).show();    
                        }

                        @Override
                        public void onFailure(String message) {
                            Toast.makeText(MainActivity.this, ""+ message, Toast.LENGTH_SHORT).show();
                        }
                    });
```

## Autocomplete Library

``` Java

SearchAutoCompleteAPI.builder(getApplicationContext())
                     .nameOrCode(nameOrCode)
                     .build()
                     .generateList(new SearchAutoCompleteListener() {
                        @Override
                        public void onPlaceListReceived(ArrayList<SearchAutoCompletePlace> places) {
                            Toast.makeText(MainActivity.this, "Selected Place"+places.get(0).getAddress(), Toast.LENGTH_SHORT).show();
                        }
                        @Override
                        public void onFailure(String message) {
                            Toast.makeText(MainActivity.this, "Error Message"+message, Toast.LENGTH_SHORT).show();
                        }
});
```



