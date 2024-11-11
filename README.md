# Dapper Dogs

**1/100 of my App-A-Day challenge**

[Check it out live here.](https://dapper-dogs.timinc.us/)

## What

A simple app that allows users to view random dog photos in a carousel, like them, and review their likes. In order to like or see your likes, you must log in with a username.

## How

* Uses [The Dog Api](https://thedogapi.com/) to get the random list of dogs, save the likes, and retrieve the liked entries.
* Uses HTML, CSS, and JavaScript as static files. No backend logic was implemented.
* Uses JavaScript's Fetch library to make the required HTTP requests.
* Uses Bootstrap to create and manage the carousel.
* The username is persisted in local storage, and though it has no security on it, you can use the same username on separate devices to log in!