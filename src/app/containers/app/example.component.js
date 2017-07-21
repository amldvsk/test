class exampleController {
  constructor ($timeout) {
    'ngInject';
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


export const exampleComponent =  {
  controller : exampleController,  
  templateUrl: 'app/containers/example/example.html',  
  bindings : {
    
  },
}
