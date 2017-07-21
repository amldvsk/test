import { israeliIdInput } from './common/inputs/israeliIdInput/israeliIdInput.module';

import { AppComponent } from '../app/containers/app/app.component';

angular.module('common-components', ['israeliIdInput'])  
  .component('example', AppComponent)
