# Weather Search ☀️
An awesome mini web application built with Node.js and Express for you to readily search for current weather condition of a place.

## Project First Look
![Application Screen Shot in GIF](weather-search.gif)

## Features
| Functions              | Detail                                            | URL                         |
| :--------------------: | ------------------------------------------------- | --------------------------- |
| Find instructions to use | User can find the instructions to use the app | / |
| Search for weather condition | User can search for the current weather condition of a place | /search |

## Installation
The following instructions will get you a copy of the project and all the setting needed to run it on your local machine.


### Prerequisites

- [Node.js v10.16.0](https://nodejs.org/en/download/)

### Clone

Clone this repository to your local machine

```
$ git clone https://github.com/smallpaes/weather-search.git
```

### Setup

1. Create an account at [https://darksky.net/dev](https://darksky.net/dev)

2. Create a new project at [https://www.mapbox.com/](https://www.mapbox.com/)

3. Enter the project folder

```
$ cd restaurant-list-v3
```

4. Install npm packages

```
$ npm install
```

5. Create .env file

```
$ touch .env
```

6. Store API Key in .env file and save

```
DARKSKY_KEY=<YOUR_DARKSKY_API_KEY>
MAPBOX_KEY=<YOUR_MAPBOX_API_KEY>
```

7. Activate the server 

```
$ node app.js
```

8. Find the message for successful activation

```
> Express is listening on http://localhost:3000
```
You may visit the application on browser with the URL: http://localhost:3000

## Authors
[Mike Huang](https://github.com/smallpaes)
