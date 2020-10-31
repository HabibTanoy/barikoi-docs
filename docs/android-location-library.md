---
id: android-location
title: Barikoi Location Library
---
## Install the Barikoi Location Library for Android

Before you begin building your app, install the Barikoi Location Library for Android by following our installation guide. The installation guide assumes that you have already downloaded Android Studio and created a new project. You'll make changes to four different files within your project to install the Barikoi Location Library for Android. The four files you'll be working with include: build.gradle (Module:App): Android Studio uses a toolkit called Gradle to compile resources and source code into an APK. This plain text file is used to configure the build and list dependencies, including the Barikoi Location Library for Android. AndroidManifest.xml: This is where you'll describe components of the application. MainActivity.java: This is a Java file where you'll specify Barikoi classes and methods. activity_main.xml: This is where you'll set the properties for your Location related searches, add an fragment to access an activity. Once you've completed all the steps in the installation guide, the four files below should include the following:

## build.gradle (Module:App)

```
//in addition to the rest of your build.gradle contents
//you should include the following repository and dependency

android {
    compileOptions {
        sourceCompatibility JavaVersion.VERSION_1_8
        targetCompatibility JavaVersion.VERSION_1_8
    }
}

allprojects {
    repositories {
        ...
        maven { url 'https://jitpack.io' }
    }
}

dependencies {
    implementation 'com.github.barikoi:BarikoiLocationLibrary:v1.2.2'
}
```