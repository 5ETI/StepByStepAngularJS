angular.module('commServices', []).factory('comm',commFnc);
commFnc.$inject=['$http','$q'];

function commFnc($http,$q ){
	var comm = {
		loadImages:       loadImages,
		loadPres:          loadPres,
		savePres:      savePres

	};

   //TODO permettre de renvoyer une Map de plusieurs content au bout de 3s (idem pour le cas de la présentation)
   function loadImages(presName,presID){
// TODO
var contentToSend = {};
var deferred = $q.defer();
setInterval(function(presName, presID){
	if( ){
		deferred.resolve(true);
	}
	else{
		deferred.reject(false);
	}
	clearInterval(this);
},3000,presName, presID);
return deferred.promise;
};
function loadPres(presName,presID){
// TODO
};
function savePres(){

};
};
