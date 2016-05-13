import angular from 'angular';
import appModule from './config';

/* styles */
import '../node_modules/angular-material/angular-material.scss';

angular.bootstrap(document, [appModule.name]);
