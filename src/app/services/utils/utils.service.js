class UtilService {
    constructor() {
      'ngInject';
      console.log('asdasd')
    }

    validateId(id) {
      var IDnum = String(id);

      // Validate correct input
      if ((IDnum.length > 9) || (IDnum.length < 5))
          return false; 
      if (isNaN(IDnum))
          return false;

      // The number is too short - add leading 0000
      if (IDnum.length < 9)
      {
          while(IDnum.length < 9)
          {
            IDnum = '0' + IDnum;         
          }
      }

      // CHECK THE ID NUMBER
      var mone = 0, incNum;
      for (var i=0; i < 9; i++)
      {
          incNum = Number(IDnum.charAt(i));
          incNum *= (i%2)+1;
          if (incNum > 9)
            incNum -= 9;
          mone += incNum;
      }
      if (mone%10 == 0)
          return true;
      
      return false
    }

}



angular.module('utilServices', [])  
  .service('utilService', UtilService)