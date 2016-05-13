Telefonica test:

PHP layer works with php 5.4 and higher to be able to use SNMP class
- install php5-snmp library
Have Composer installed on your system
- php server file is under /php directory
- deploy it to apache on port 80 localhost
- it will accept CORS requests from the angularjs app
- run composer install to install simple router library for php

Angular
- npm install - to install all dependencies
- npm run build - to build
- npm start - to start node server (it will listen on port 3000)

- npm tests - to run karma tests for angular app

- becaues of angular-material css framework dependency and chart library dependency
  the app works on IE11 and up, Chrome, Firefox, Safari

Interaction:
- after clicking Start button, the app starts polling data from the endpoint
- it will display the data in the bar chart
- you can stop the polling by clicking Stop
- you can reset the data by clicking Reset

Areas for improvement:
PHP
- encapsulate php functionality into a class and add phpunit tests
- parameterize routes so that it can fetch data from different SNMP OIDs

Javascript
- extract factory to a separate file and parametrize to add flexibility to be able to hit different endpoints
- add tests for router and factory

E2E
- incorporate e2e tests
- handle errors and edge cases (e.g. when SNMP is not returning anything)
