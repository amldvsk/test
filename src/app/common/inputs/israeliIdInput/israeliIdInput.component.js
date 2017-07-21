class IsraeliIdInpuController {
  constructor ($scope, utilService) {
    'ngInject'; 
    this.utilService = utilService;
    
  }
  
  $onChanges(changes) {   
    if(changes.validate.currentValue == true) {
      this.form[this.name].$setValidity('required',this.utilService.validateId(this.ngModel));
    }
  }


}



export const IsraeliIdInputComponent =  {
  
  bindings : {
    placeholder : "@",
    inputClass : "@",
    id : "@",
    label : "@?",
    labelClass : "@?",
    errorClass : "@?",
    ngModel : '=',
    required : '=',
    name : "@",
    validate : "<",
    form:"="
  },
  templateUrl: 'app/common/inputs/israeliIdInput/israeliIdInput.html',
  controller : IsraeliIdInpuController
}
