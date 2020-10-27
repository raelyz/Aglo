# Aglo

Your convenient source of news.
http://aglo.herokuapp.com/

## User Story

In 2020, there are over 2.2 million apps available for download. With every traditional publication moving over to phone apps and websites, this has just made it ever less convenient for the end user placed with so many choices.

Aglo seeks to simplify this issue by combining all your news feed into 1 platform for your convenience.

## Further Development

As a software engineer, there is a consistent need to keep up with technology and upskill ourselves. 
However we often face a challenge of finding out about the things we don't know. Aglo seeks to solve this problem as it caches your search history and clickthroughs. 
Using the data it will generate new search results from youtub and other possible APIs to recommend to the user in hopes of suggesting an article of interest in the relevant field.

For aspiring software engineers, feel free to clone the repo should you wish to implement other forms of data structures and algorithms!

## Technologies used & General Approach

New technologies I learnt: MongoDB, OAuth2, JWT, GoogleAPIs

MERN stack was employed as I wanted to get out of my comfort zone to explore something new. MongoDB was a requirement due to it being NoSQL allowing me to explore more possibilities 
as compared to PSQL which was taught in my course.

The initial idea of the APP came about from me trying to incoporate algorithms and data structures to an application and there were a few possible apps i explored such as an algorithm
 mixed with tower defence where path finding algorithms could be employed. Eventually i settled on a news aggregator as i wanted to make something functional for myself and other software engineers if it is successful.

Some issues encountered during development were the lack of functional end routes to produce a working product as most apps wouldn't want to drive traffic out of their own websites.
I did a workaround by utilizing NPM packages making it more user friendly for other programmers to utilize. 

Apart from that youtube's daily quota also meant that i couldn't kept querying their routes. This lead to me caching the results to display
on subsequent logins to reduce operational costs. 

## Wireframes

https://marvelapp.com/prototype/52hhg0h

Initial wireframes were based on what i envisioned the project to be initially

## Screenshots

#### Homepage
<img src="/homepage.png"/>

#### Dashboard
<img src="/Dashboard.jpg"/>

#### Edit
<img src="/edit.png"/>

## Installation Guide for Individual Use

#### In your root directory
```sh
touch .env
npm install
npm run server
```
Declare your mongoURI and OAuth2 token in here

#### In your client directory
```sh
touch .env
npm install
npm run start
```

Declare your REACT_APP_YV3_KEY (youtube key) && REACT_APP_OAUTH (OAuth2 token used in the backend) here
