Telefonica test:

PHP layer works with php 5.4 and higher to be able to use SNMP class
- install php5-snmp library
- install Composer on your system globally
- php server file is under /php directory
- deploy it to apache on port 80 (localhost)
- the php endpoint accepts CORS requests
- run composer install to install simple router library for php

- optionally use the server which is deployed for the purpose of this test at ```54.171.95.60``` - it will return json in the following format ```{"value":"645418142"}``` 

Angular
- npm install - to install all dependencies
- npm run build - to build
- npm start - to start node server (it will listen on port 3000)

- npm tests - to run karma tests for angular app

- becaues of angular-material css framework dependency and chart library dependency
  the app works on IE11 and up, Chrome, Firefox, Safari

Descriptoion:
- after starting the app, you will see 3 charts, top two charts are spawned on the page using directive (```chartDirective```).
- ```chartDirective``` has a set of buttons to interact with. The buttons are responsible for stopping/starting polling data from the php endpoint or reseting the chart.
- the polling url is set as a directive html attribute.
- third chart is another directive (```reveiverChartDirective```) which listens to the events emitted by ```chartDirective```.
- ```receiverChartDirective``` listens to events and will update the circural chart every time it gets the data emitted by ```chartDirectiveController```
- there is also ```mainController``` with wich you can controll all spawned on the page ```chartDirectives```
- mainController has three buttons: ```start all```, ```stop all``` and ```reset all``` which emit events to ```chartDirectives```.

Interaction:
- after clicking ```start all``` button, the event is emitted to directives and they start counting down 10 seconds
- after counter gets to 0, the ```chartDirective``` calls the php endpoint
- php endpoint responds with the data from one of the SNMP endpoints from the test insctuctions
- after receiving the data, ```chartDirectiveController``` starts counting down from 10 again.
- you can start/stop individual polling chart and the changes will be reflected in the ```receiverChart```
- you can also ```start all```, ```stop all``` or ```reset all``` 
- the ```chartDirevies``` are not registered in the ```mainController``` so it doesn't know if all the charts has been stopped individually and it won't be reflected in the ```mainController's``` buttons state.  

Areas for improvement:
PHP
- encapsulate php functionality into a class and add phpunit tests
- parameterize routes so that it can fetch data from different SNMP OIDs

E2E
- incorporate e2e tests
- handle errors and edge cases (e.g. when SNMP is not returning anything)
