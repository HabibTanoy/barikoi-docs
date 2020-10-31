---
id: android-search
title: Search
---
## Search Autocomplete Fragment

To use the Barikoi Search Autocomplete Activity first add the below code snippet in your activity xml file.

## activity_main.xml

```
<fragment 
        android:id="@+id/barikoiSearchAutocompleteFragment"
        android:layout_width="match_parent"
        android:layout_height="wrap_content"
        android:name="barikoi.barikoilocation.SearchAutoComplete.SearchAutocompleteFragment"/>
```

## Then in you activity add the below code:

``` Java
SearchAutocompleteFragment searchAutocompleteFragment;
searchAutocompleteFragment=(SearchAutocompleteFragment)getSupportFragmentManager().findFragmentById(R.id.barikoiSearchAutocompleteFragment);
searchAutocompleteFragment.setPlaceSelectionListener(new SearchAutocompleteFragment.PlaceSelectionListener() {

    @Override
    public void onPlaceSelected(GeoCodePlace place) {
        Toast.makeText(MainActivity.this, "Place Selected: "+place.getAddress(), Toast.LENGTH_SHORT).show();
    }

    @Override
     public void onFailure(String error) {
        Toast.makeText(MainActivity.this, "Error Message"+error, Toast.LENGTH_SHORT).show();
    }

});
```