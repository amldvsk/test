class AppController {
  constructor ($timeout) {
    'ngInject';
    console.log('AppController', this)
    this.$timeout = $timeout;
  }

  $onInit() {
  }



  submit() {
    this.validate = true; 
    this.$timeout(() => {
      this.validate = false; 
    }, 100)
  }
  
}


export const AppComponent =  {
  controller : AppController,  
  templateUrl: 'app/containers/app/app.html',  
  bindings : {
    
  },
}
