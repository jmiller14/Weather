# Frontend Developer Exercise 2.4

## Introduction
The purpose of this exercise is for the developer to exhibit his familiarity with frontend technologies, programming patterns and to provide with a sample of what clean and reusable code means to the candidate.

Please put your comment about the decisions you have made inline, and give a summary about the architectural choices that you considered.

## Constraints
* Please don’t use ES6
* It is ok to use dependency management tools and task runners, but please make sure your exercise runs simply by opening your main HTML file in a browser.
* Please make sure the delivered package contains an unminified and human readable version of your sources.
* Please refrain from leveraging scaffolding tools (like yeoman) or boilerplate
templates.
* Please don’t use out-of-the-box plugins.
* Please create a readme file that explains what you have done

## Exercise
We will use Open Weather Data to create a single page application that presents a list of 5 European cities (you can choose the ones you prefer). Your goal is to get the current weather situation displaying the city name plus sunrise time and sunset time. Clicking on an item shows the sea level in the next 5 days at 9:00. You can adjust the UI how you see fit for the best result, but sticking to a single page application is mandatory. We would prefer if you will deliver the code using BitBucket (private repo) but also a zip file is fine.

## Open Weather Data API
To complete the proposed exercise two different kind of APIs are needed.
For example, to get the current weather data in London:
```
http://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=3d8b309701a13f65b660fa2c64cdc517
```
More details here http://openweathermap.org/current

It is possible to find more information here http://openweathermap.org/api

## UI/UX
In Backbase we take pride that we have created a lean portal, with focus on UX. Your UI should reflect the same principles. Try creating something simple, user friendly and eye appealing. Feel free to use any UI resources you’d like to achieve that. For example you could use Twitter Bootstrap, or any other UI library.

## Architecture
Here there is no limitation. Design your application anyway you want. Focus on clean, reusable code. Focus on frontend best practices. Show us that you know how to produce high quality modern web applications.

## Libraries
We would love to see your skills using AngularJS 1.5.x

## Backend
No Backend required.

## Extra points
Adding a chart will be an extra point.
