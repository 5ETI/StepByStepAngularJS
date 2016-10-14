angular.module('commServices', []).factory('comm',commFnc);
commFnc.$inject=['$http','$q'];

function commFnc($http,$q, factory){
	var comm = {
		loadImages:       loadImages,
		loadPres:          loadPres,
		savePres:      savePres

	};

	function loadImages(presName,presID){
		var contentToSend = {};
		var deferred = $q.defer();
		setInterval(function(presName,presID){
			contentToSend["1"] = factory.contentCreation('img 0', 'test ', 'img/0.png')
			deferred.resolve(data);
			// }else{
			// 	deferred.reject(status);
			// }
			clearInterval(this);
		},3000,presName,presID);
		
		return deferred.promise;

	};
	function loadPres(presName,presID){
// TODO
} ;   
};
