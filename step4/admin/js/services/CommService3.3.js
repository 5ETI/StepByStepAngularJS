angular.module('commServices', []).factory('comm',commFnc);
commFnc.$inject=['$http','$q'];

function commFnc($http,$q ){
     var comm = {
         loadImages:       loadImages,
         loadPres:          loadPres,
         savePres:      savePres
         
     };
   
   //TODO
   
};
    