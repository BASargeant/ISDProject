# Implementation


## Introduction
The dataset taken from https://opendata.bristol.gov.uk/ consists of burglary and violent & sexual offence incidents against the total number of crimes reported to the police. Provided at ward level and expressed as a rate per 1,000 of the ward population.

Dataset Identifier
crime-recorded-by-police-by-selected-offence-groups-in-bristol-by-ward

Dataset Schema:
Ward Code
Ward Name
Time Period (Financial year (April to March))
Latest Mid-Year Population Estimates for Ward
All Crimes (number) (Total number of all crimes reported to the police.)
All Crimes (rate per 1000 ward population)
Violent & Sexual Offences (number)
Violent & Sexual Offences (rate per 1000 ward population)
Burglary (number)
Burglary (rate per 1000 ward population)
geo_shape (coordinates dictating the shape of the ward)
geo_point_2d (longitude and latitude of ward)

## Project Structure
├── database.js
├── main.js
├── node_modules
├── package-lock.json
├── package.js
├── package.json
├── test.js
└── views   
    ├── header.ejs
    ├── HomePage.ejs
    ├── MapPage.ejs
    ├── TablePage.ejs
    ├── TablePageBurg.ejs
    └── TablePageViolent.ejs

## Software Architecture
TODO: Describe the major components of your architecture. Are any particular architectural styles being used?

![Component Diagram](images/componentdiagram.png)
