---
id: android-token
title: Get an access token
---

## Get an access token

If you don't have a Barikoi account, [sign up](https://developer.barikoi.com/register) for one here and then navigate to your Account page. Copy your default public token to your clipboard. After you've added the Barikoi Library as a dependency inside of your Android project, Paste the below code into your application class.

```
BarikoiAPI.getINSTANCE(getApplicationContext(), "access_token");
```

## If you don't have an application class seperately

If you don't want to have a separate application class for your Project, then paste the same code in every activity class, in which you are using the api's.